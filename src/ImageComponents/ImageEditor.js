import React from 'react';
 import { calcCropRec, calcPrevImgSize } from "./imageCanvasUtils";

const data = {
    settings:[
      {
          name: 'contrast',
          value: '100%',
      },
      {
          name: 'hue',
          value: '0deg'
      },
      {
          name: 'brightness',
          value: '100%'
      },
      {
          name: 'saturate',
          value: '100%'
      },
      {
          name: 'sepia',
          value: '0%'
      },
      {
          name:'invert',
          value:'0%'
      },
      {
        name: 'rotation',
        value: '0'
      },
      {
        name: 'width',
        value: '0'
      }
    ]
  }
  const ImagePixels = ({ value }) => (
    <>
      <div>
        Width: {value.w}
        px
      </div>
      <div>
        Height: {value.h}
        px
      </div>
      <div>
        Size: {value.size}
        px
      </div>
    </>
  );
  
  export default class ImageEditor extends React.Component{
    constructor(){
      super();
    }
    
    handleChange = (e) =>{
      let name = e.target.id;
      let value = e.target.value;
      switch (name) {
              case 'contrast':
                  this.props.data.settings[0].value = value + '%';
                  break;
              case 'hue':
                  this.props.data.settings[1].value = value + 'deg';
                  break;
              case 'brightness':
                  this.props.data.settings[2].value = value + '%';
                  break;
              case 'saturate':
                  this.props.data.settings[3].value = value + '%';
                  break;
              case 'sepia':
                  this.props.data.settings[4].value = value + '%';
                  break;
              case 'invert':
                  this.props.data.settings[5].value = value + '%';
                  break;
              case 'rotation':
                  this.props.data.settings[6].value = value;
                  break;
                  case 'width':
                  this.props.data.settings[7].value = value;
                  break;
          }
          this.forceUpdate();
    }
    
    render(){
      return(
        <div className="settings">
          <Settings settings={this.props.data.settings} url={this.props.data.image} onChange={this.handleChange}/> 
        </div>
      )
    }
  }
  
  class Settings extends React.Component{
    constructor(props){
      super(props);
      this.setVal = this.setVal.bind(this);
    }
    setVal(setting,onChange){
      switch(setting.name){
        case 'contrast': return (<input type="range" step="1" min="0" max="200" id={setting.name} onChange={onChange} defaultValue={setting.value}  />)
          break;
        case 'hue': return (<input type="range" step="1" min="0" max="360" id={setting.name} onChange={onChange} defaultValue={setting.value}  />)
          break;
        case 'brightness': return (<input type="range" step="1" min="0" max="200" id={setting.name} onChange={onChange} defaultValue={setting.value}  />)
          break;
        case 'saturate': return (<input type="range" step="1" min="0" max="100" id={setting.name} onChange={onChange} defaultValue={setting.value}  />)
          break;
        case 'sepia': return (<input type="range" step="1" min="0" max="100" id={setting.name} onChange={onChange} defaultValue={setting.value}  />)
          break;
        case 'invert': return (<input type="range" step="1" min="0" max="100" id={setting.name} onChange={onChange} defaultValue={setting.value}  />)
          break;
        case 'grayscale': return (<input type="range" step="1" min="0" max="100" id={setting.name} onChange={onChange} defaultValue={setting.value}  />)
          break;
        case 'rotation': return (<input type="range" step="1" min="0" max="360" id={setting.name} onChange={onChange} defaultValue={setting.value}  /> )
          break;
          case 'width': return (<input type="range" step="1" min="0" max="1400" id={setting.name} onChange={onChange} defaultValue={setting.value}  /> )
          break;
        default: return (<input type="range"/>)
      } 
    }
    render(){
       const onchange = this.props.onChange;
      return(
        <div className="contentWrap">
          <div className="sidebar">
            <div className="title">Filters</div>
              {this.props.settings.map(function(setting,index){      
                return( 
                  <div className="setting">
                    <label className="filterName">
                      <div>{setting.name}</div>
                      <div>{setting.value}</div>
                    </ label>
                    {Settings.prototype.setVal(setting,onchange)}
                  </div>
                )
              })}
        </div>
        <Image url={this.props.url} settings={this.props.settings} />
      </div>
        )
    }
  }
  
  class Image extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        name: '',
        imageField: '',
        rotation: 0,
        width: 0,
        height: 0,
        pixels: {
            w: 0,
            h: 0,
         }
         , 
         x: 0, y: 0
      }
    }
    _onMouseMove = (e) => {
    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  }
  onBoundsElement = (e, elt) => {
    let guitarBounds = document.querySelector('.guitar');
    let guitarContainer = document.querySelector('.containerGuitar');
      let bounds = guitarBounds.getBoundingClientRect();
      console.log(' its working ' + bounds.width + ' szerokości' + ' i ' + bounds.height + ' wyskokości.');
  }
    onImgLoad = ({ target: img }) => {
    this.setState({
      width: img.width,
      height: img.height,
    });
  };
    componentDidMount () {
      {/* let canvas = document.getElementById('canvas');
      console.log(canvas.width); */}
        {/* console.log(this.myInput.current.offsetWidth); */}
        this.onBoundsElement();
        const pixels = this.handlePixels();
        this.setState({
         pixels
      });
      }

  convertImageToCanvas = (image) => {
	var canvas = document.createElement("canvas");
	canvas.width = image.width;
	canvas.height = image.height;
	canvas.getContext("2d").drawImage(image, 0, 0);

	return canvas;
}
      positionImage = (e) => {
    const img = this.refs.masterImg
    const rect = img.getBoundingClientRect();
    let x = rect.left;
    let y = rect.top;
    let w = rect.width;
    let h = rect.height;
    this.setState({
      width: w,
      height: h
    })
  }
      relativePosition = (e) => {
    const img = this.refs.masterImg
    const rect = img.getBoundingClientRect()
    return [
      (e.clientX - rect.left) / rect.width,
      (e.clientY - rect.top) / rect.height,
    ].map(num => Math.max(0, Math.min(num, 1)))
  }

      handlePixels = (w, h) => {
      const { img } = this.props;
      const boundary = this.onImgLoad;
      const pixels = {
         w: (10),
         h: (10),
         size: (10)
      };

      return pixels;
   };
    rotate = (e) => {
      let newRotation = this.state.rotation + 60;
      if(newRotation >= 360){
        newRotation = 360;
        // newRotation = 0;
      }
      this.setState({
        rotation: newRotation,
      })
    }
    rotateleft = (e) => {
      let newRotation = this.state.rotation - 60;
      {/* let newOnLoad = this.onImgLoad; */}
      
      if(newRotation <= -360){
        newRotation = -360;
      }
      this.setState({
        rotation: newRotation,
      })
      
    }
    
//image Upload elements
  fileChangedHandler = (event) => {
      event.preventDefault();
      this.setState({imageField: URL.createObjectURL(event.target.files[0])
      })
    }
    render(){
      let { rotation, width, height, x, y } =  this.state;
      console.log(width);
      const imgStyle = {
        style: `width(${this.props.settings[7].value}px)`,
        transform: `rotate(${this.props.settings[6].value}deg) rotate(${rotation}deg)`,
        filter: ` contrast(${this.props.settings[0].value}) hue-rotate(${this.props.settings[1].value}) brightness(${this.props.settings[2].value}) saturate(${this.props.settings[3].value}) sepia(${this.props.settings[4].value})
        invert(${this.props.settings[5].value})`,
      }
      {/* width: `width(${this.props.settings[7].value}px) `, */}
      const imgStyle2 = {
        maxWidth: '15%',
        maxHeight: '90%',
        padding: '1em',
        lineHeight: '1.5em',
        color: 'white'
      }
      const imgStyle3 = {
        maxWidth: '85%',
        maxHeight: '90%'
      }
      const imageContainerUpload = {
          width: '800px',
          height: '800px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
      }
      return(
        <div className="imageContainer">
          <form style={imageContainerUpload} action="/upload" method="POST" encType="multipart/form-data" onSubmit={this.handleSumbit}>
            <div className='containerGuitar' style={imgStyle3}>
              <input onClick={this.rotateleft} type="button" value="Lewo" />
              {/* <canvas> */}
                <img id="ing" 
                  src={this.state.imageField}
                  className="guitar" 
                  style={imgStyle}
                  width={width} height={height}
                  onClick={this.onBoundsElement}
                  
                  onLoad={this.onImgLoad} />
              {/* </canvas> */}
              <input onClick={this.rotate} type="button" value="Prawo" />
            </div>
            <div style={imgStyle2}>
              <input type="file" id="imageField" onChange={this.fileChangedHandler} />
              <p>Szerokość: {width} </p>
              <p>Wysokość: {height} </p>
              <p>{ x } { y }</p>
              <ImagePixels value={this.state.pixels} />
              {console.log(this.state.pixels)}
            </div>                  
          </form>
        </div>
      )
    }
  }
  
  ImageEditor.defaultProps = {
    data : data
  }