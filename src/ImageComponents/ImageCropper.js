const { Component } = React
const { connect, Provider } = ReactRedux
const { combineReducers, createStore } = Redux

// It's safer to use a CodePen asset image, due to CORS and https policies
// image credit https://unsplash.com/@joshuaearle
const IMAGEID = `photo-1491485066275-97da4e681cb8`
const SOURCE = `https://images.unsplash.com/${IMAGEID}?fm=jpg&crop=max&w=1000`
const CROP = { h: [0.2, 0.3, 0.4], v: [0.2, 0.4, 0.7] }

// Action creators

const actions = {
  setCenter: (src, position) => ({
    type: 'MOVE_CENTER',
    payload: { src, position },
  }),
  startDragHandle: (src, position, dragMask) => ({
    type: 'START_DRAG_HANDLE',
    payload: { src, position, dragMask },
  }),
  startNewCrop: (src, position) => ({
    type: 'START_NEW_CROP',
    payload: { src, position },
  }),
  moveDragHandle: (src, position) => ({
    type: 'MOVE_DRAG_HANDLE',
    payload: { src, position },
  }),
  endDragHandle: src => ({
    type: 'END_DRAG_HANDLE',
    payload: { src },
  }),
  setImgSize: (src, size) => ({
    type: 'SET_IMAGE_SIZE',
    payload: { src, size },
  }),
  addImage: (src, crop) => ({
    type: 'ADD_IMAGE',
    payload: { src, crop },
  }),
}

// Reducers

const normalize = dim => {
  const sorted = [0, dim[0], dim[2], 1].sort((a, b) => a - b)
  return [sorted[1], dim[1], sorted[2]]
}

const imageDefaultState = { src: '', dragging: {}, size: [], crop: {} }
const image = (state, action) => {
  switch (action.type) {
    case 'ADD_IMAGE':
      return state || { ...imageDefaultState, ...action.payload }
    case 'MOVE_CENTER': {
      const [x, y] = action.payload.position
      const { h, v } = state.crop
      return {
        ...state,
        crop: {
          h: normalize([h[0], x, h[2]]),
          v: normalize([v[0], y, v[2]]),
        },
      }
    }

    case 'START_NEW_CROP': {
      const [x, y] = action.payload.position
      return {
        ...state,
        crop: {
          h: [x, state.crop.h[1], x],
          v: [y, state.crop.v[1], y],
        },
        dragging: {
          dragMask: [1, 1, 0, 0, 0],
          initialPosition: action.payload.position,
          initialCrop: state.crop,
        },
      }
    }

    case 'START_DRAG_HANDLE':
      return {
        ...state,
        dragging: {
          dragMask: action.payload.dragMask,
          initialPosition: action.payload.position,
          initialCrop: state.crop,
        },
      }
    case 'MOVE_DRAG_HANDLE': {
      if (!state.dragging.dragMask) return state
      const [left, top, right, bottom, center] = state.dragging.dragMask
      const [x, y] = action.payload.position
      const { h, v } = state.crop
      let crop = {
        h: [left ? x : h[0], center ? x : h[1], right ? x : h[2]],
        v: [top ? y : v[0], center ? y : v[1], bottom ? y : v[2]],
      }
      if (left && right && top && bottom) {
        const {
          initialPosition: pi,
          initialCrop: { h: hi, v: vi },
        } = state.dragging
        const dx = x - pi[0]
        const dy = y - pi[1]
        crop = {
          h: [hi[0] + dx, hi[1], hi[2] + dx],
          v: [vi[0] + dy, vi[1], vi[2] + dy],
        }
      }
      return { ...state, crop }
    }
    case 'END_DRAG_HANDLE':
      return {
        ...state,
        crop: {
          h: normalize(state.crop.h),
          v: normalize(state.crop.v),
        },
        dragging: { dragMask: [0, 0, 0, 0, 0] },
      }
    case 'SET_IMAGE_SIZE':
      return { ...state, size: action.payload.size }
    default:
      return state
  }
}

const aspects = (state = [1, 0.5, 2.5], action) => state

const images = (state = {}, action) => {
  if (action.payload && action.payload.src) {
    const src = action.payload.src
    const newState = { ...state }
    newState[src] = image(state[src], action)
    return newState
  }
  return state
}

const rootReducer = combineReducers({ images, aspects })

// Components
const InfoBox = ({ items }) => (
  <div className="infoBoxWrapper">
    <div className="infoBox">
      {Object.keys(items).map(key => (
        <div className="infoRow" key={key}>
          <div className="label">{key}:</div>
          <div className="value">{items[key]}</div>
        </div>
      ))}
    </div>
  </div>
)

const infoBoxMapStateToProps = (state, { src }) => {
  const crop = state.images[src].crop
  const [left, x, right, top, y, bottom] = [...crop.v, ...crop.h].map(num =>
    num.toFixed(3)
  )
  return { items: { left, top, right, bottom, x, y } }
}
const CropInfo = connect(infoBoxMapStateToProps)(InfoBox)

const closeCrop = (x, y, l, r, t, b, A) => {
  const w = r - l
  const h = b - t
  const a = w / h
  const W = 0.5 * Math.min(A, 1, a > A ? w : h * A)
  const H = W / A
  const [X, Y] = [
    W * 2 > w ? [W, (l + r) / 2, 1 - W] : [l + W, x, r - W],
    H * 2 > h ? [H, (t + b) / 2, 1 - H] : [t + H, y, b - H],
  ].map(arr => arr.sort((n, m) => n - m)[1])

  return {
    left: X - W,
    right: X + W,
    top: Y - H,
    bottom: Y + H,
  }
}

const getStyles = (src, crop, imgRatio, frameRatio) => {
  const h = normalize(crop.h)
  const v = normalize(crop.v)
  const { left, top, right, bottom } = closeCrop(
    h[1],
    v[1],
    h[0],
    h[2],
    v[0],
    v[2],
    frameRatio / imgRatio
  )
  const width = right - left
  const height = bottom - top
  const ratioOf = (low, val, high) =>
    high === low ? 0.5 : (val - low) / (high - low)
  const percent = number => `${(100 * number).toFixed(1)}%`
  return {
    backgroundImage: `url(${src})`,
    backgroundPosition: [[width, right, 1], [height, bottom, 1]]
      .map(dim => ratioOf(...dim))
      .map(percent)
      .join(' '),
    backgroundRepeat: 'no-repeat',
    backgroundSize: `${percent(1 / width)} ${percent(1 / height)}`,
  }
}

let PreviewImg = ({ src, crop, size, aspect, style = {} }) => {
  const styles = getStyles(src, crop, size[0] / size[1], aspect)
  const items = {
    position: styles.backgroundPosition,
    size: styles.backgroundSize,
    'aspect ratio': aspect,
  }
  const denom = 360
  const viewBox = `0 0 ${Math.round(aspect * denom)} ${denom}`
  return (
    <div className="previewWrapper infoParent" style={style}>
      <svg className="previewImg" style={styles} viewBox={viewBox} />
      <InfoBox items={items} />
    </div>
  )
}
PreviewImg = connect((state, { src }) => state.images[src])(PreviewImg)

const Previews = ({ src, aspects, flexDirection }) => (
  <div className="previewPanel" style={{ flexDirection }}>
    {aspects.map((aspect, i) => (
      <PreviewImg key={i} aspect={aspect} src={src} style={{ flex: aspect }} />
    ))}
  </div>
)
const DragKing = props => <div className="dragKing" {...props} />

const Handle = ({ name, cursor, mouseDownHandler }) => {
  const handleSize = 0.1
  const mask = name.split('').map(parseFloat)
  return (
    <rect
      className={name}
      onMouseDown={mouseDownHandler(mask)}
      width={1 - mask[0] - mask[2] + handleSize}
      height={1 - mask[1] - mask[3] + handleSize}
      x={mask[2] - handleSize / 2}
      y={mask[3] - handleSize / 2}
      style={{ cursor }}
    />
  )
}

let Overlay = ({
  size,
  crop,
  relativePosition,
  dragging,
  startDragHandle,
  startNewCrop,
  setCenter,
  moveDragHandle,
  endDragHandle,
}) => {
  const [left, x, right] = normalize(crop.h)
  const [top, y, bottom] = normalize(crop.v)
  const boxPath = `M${left}, ${top}V${bottom}H${right}V${top}Z`
  const outerPath = 'M0, 0H1V1H0Z'
  const circleRadius = rx => ({ rx, ry: rx * size[0] / size[1] || rx })
  const mouseDownHandler = dragMask => e =>
    startDragHandle(relativePosition(e), dragMask)
  const mouseMove = e => moveDragHandle(relativePosition(e))
  const newCrop = e => startNewCrop(relativePosition(e))
  const moveCenter = e => setCenter(relativePosition(e))
  const isDragging = dragging.dragMask && dragging.dragMask.some(Boolean)
  const handles = [
    ['1000', 'ew-resize'],
    ['0010', 'ew-resize'],
    ['0100', 'ns-resize'],
    ['0001', 'ns-resize'],
    ['1100', 'nw-resize'],
    ['0110', 'ne-resize'],
    ['0011', 'se-resize'],
    ['1001', 'sw-resize'],
  ]

  return (
    <div className="overlayWrapper">
      <svg
        className="overlay"
        viewBox="0 0 1 1"
        preserveAspectRatio="none"
        height="100%"
        width="100%"
      >
        <path
          className="outside"
          fillRule="evenodd"
          d={outerPath + boxPath}
          onMouseDown={newCrop}
        />
        <g className="inside">
          <path
            onMouseDown={mouseDownHandler([1, 1, 1, 1, 0])}
            className="box"
            d={boxPath}
          />
          <svg
            className="handles"
            viewBox="0 0 1 1"
            preserveAspectRatio="none"
            height={bottom - top}
            width={right - left}
            x={left}
            y={top}
          >
            {handles.map(([name, cursor]) => (
              <Handle
                key={name}
                name={name}
                cursor={cursor}
                mouseDownHandler={mouseDownHandler}
              />
            ))}
          </svg>
        </g>
        <g className="centerPoint">
          <ellipse
            className="handle"
            onMouseDown={mouseDownHandler([0, 0, 0, 0, 1])}
            cx={x}
            cy={y}
            {...circleRadius(0.05)}
          />
          <path className="cross" d={`M0, ${y}H1M${x}, 0V1`} />
        </g>
      </svg>
      {isDragging && (
        <DragKing
          onMouseMove={mouseMove}
          onMouseUp={endDragHandle}
          onMouseLeave={endDragHandle}
        />
      )}
    </div>
  )
}

const overlayMapStateToProps = (state, { src }) => state.images[src]

const overlayMapDispatchToProps = (dispatch, { src }) => ({
  setCenter: position => {
    dispatch(actions.setCenter(src, position))
  },
  startNewCrop: position => {
    dispatch(actions.startNewCrop(src, position))
  },
  startDragHandle: (position, dragMask) => {
    dispatch(actions.startDragHandle(src, position, dragMask))
  },
  moveDragHandle: _.throttle(
    position => dispatch(actions.moveDragHandle(src, position)),
    50
  ),
  endDragHandle: () => dispatch(actions.endDragHandle(src)),
})
Overlay = connect(overlayMapStateToProps, overlayMapDispatchToProps)(Overlay)

class CropBox_ extends React.Component {
  constructor(props) {
    super(props)
    const { addImage, imageSize, setImgSize } = props
    addImage()
    this.relativePosition = this.relativePosition.bind(this)
    imageSize && setImgSize(imageSize)
    this.imgOnLoad = this.imgOnLoad.bind(this)
  }
 
  relativePosition(e) {
    const img = this.refs.masterImg
    const rect = img.getBoundingClientRect()
    return [
      (e.clientX - rect.left) / rect.width,
      (e.clientY - rect.top) / rect.height,
    ].map(num => Math.max(0, Math.min(num, 1)))
  }
  imgOnLoad(e) {
    const im = new Image()
    im.src = e.target.src
    this.props.setImgSize([im.width, im.height])
  }
  render() {
    const { src, aspects } = this.props
    const style = { flexDirection: 'column', display: 'flex' }
    return (
      <div className="cropboxWrapper" style={style}>
        <div className="masterImgWrapper infoParent">
          <img
            src={src}
            className="masterImg"
            ref="masterImg"
            onLoad={this.imgOnLoad}
          />
          <Overlay src={src} relativePosition={this.relativePosition} />
          <CropInfo src={src} />
        </div>
        <Previews src={src} aspects={aspects} flexDirection="row" />
      </div>
    )
  }
}

CropBox_.defaultProps = { aspects: [] }

const defaultCrop = { h: [0.09, 0.51, 0.91], v: [0.09, 0.51, 0.91] }
const cropBoxMapProps = (state, { src, imageSize }) => {
  const size = state.images[src] && state.images[src].size
  return size
    ? {
        aspects: state.aspects,
        imageSize: size,
      }
    : {}
}
const cropBoxMapDispatch = (dispatch, { src, crop = defaultCrop }) => ({
  setImgSize: size => dispatch(actions.setImgSize(src, size)),
  addImage: () => dispatch(actions.addImage(src, crop)),
})
const CropBox = connect(cropBoxMapProps, cropBoxMapDispatch)(CropBox_)

const devToolsExtension =
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
    ? window.devToolsExtension()
    : f => f

const store = Redux.createStore(rootReducer, {}, devToolsExtension)

