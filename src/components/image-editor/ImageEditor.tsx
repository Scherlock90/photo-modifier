import React from 'react';
import { ImageEditorServices } from '../../services/ImageEditorServices'
import { Footer } from '../footer/Footer';
import { ImageSlider } from './image-slider/ImageSlider'
import { Button, Parameters, ContainerImage } from './index'
import logo from '../../assets/images/logo.svg';

export default function ImageEditor() {

  const {
    fontColor,
    image,
    width,
    height,
    allPix,
    imgStyle,
    jsxArray,
    fileHandler,
    onBoundsElement,
    setColor,
  } = ImageEditorServices()

  return (
    <div className="image-container">
      <div className="container" >
        <div className="settings">
          {
            jsxArray.map(({ index, max, value, setFunction, rest }) =>
              <ImageSlider
                key={index}
                max={max}
                value={value}
                onChange={setFunction}
              >
                <span style={{ color: `${fontColor}` }}>
                  {index}: {value} {rest}
                </span>
              </ImageSlider>
            )
          }
      </div>
        <div className="container-image">
          <div className="header-title" style={{ color: `${fontColor}` }}>
            React Photo-Modifier <br /> with Hooks
          </div>
          <ContainerImage
            className={"App-logo"}
            src={logo}
            alt={'logo'}
          />
          <ContainerImage
            className={"img-design"}
            style={imgStyle}
            src={image}
            alt={'image'}
            onClick={() => onBoundsElement()} />
        </div>
        <div className="value-style">
          <Parameters name={'Width'} value={width} />
          <Parameters name={'Height'} value={height} />
          <Parameters name={'Size'} value={allPix} />
          <div className="input-image">
            <input type="file" id="image" onChange={fileHandler} />
          </div>
          <Button
            className={"button-on-settings"}
            name={'Change color'}
            onClick={() => setColor('#00e5ff')}
          />
          <Button
            className={"button-image"}
            name={'Value of Height/Width/Size'}
            onClick={() => onBoundsElement()}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}