import React from 'react';
import { ImageEditorServices } from '../../services/ImageEditorServices'
import { Footer } from '../footer/Footer';
import { ImageSlider } from './image-slider/ImageSlider'
import { Button, Parameters, ContainerImage } from './index'
import logo from '../../assets/images/logo.svg';

export default function ImageEditor() {

  const {
    rotation,
    rotationX,
    rotationY,
    sepia,
    grayscale,
    saturate,
    invert,
    contrast,
    brightness,
    opacity,
    hueRotate,
    fontColor,
    image,
    blur,
    width,
    height,
    allPix,
    fileHandler,
    onOpacity,
    onRotationY,
    onRotationX,
    onRotation,
    onBoundsElement,
    onHueRotate,
    onSepia,
    onBrightness,
    onBlur,
    onGrayscale,
    onContrast,
    onInvert,
    onSaturate,
    setColor,
  } = ImageEditorServices()

  const imgStyle = {
    transform: `
      rotate(${rotation}deg) 
      rotateX(${rotationX}deg) 
      rotateY(${rotationY}deg)
    `,
    filter: `
      blur(${blur}px) 
      sepia(${sepia}) 
      grayscale(${grayscale})
      saturate(${saturate}) 
      invert(${invert}) 
      contrast(${contrast}) 
      brightness(${brightness}) 
      opacity(${opacity}) 
      hue-rotate(${hueRotate}deg)
    `,
  }

  const jsxArray = [
    {
      index: "Opacity",
      value: opacity,
      max: 1,
      setFunction: onOpacity,
      rest: ''
    },
    {
      index: "Brightness",
      value: brightness,
      max: 100,
      setFunction: onBrightness,
      rest: '%'
    },
    {
      index: "Blur",
      value: blur,
      max: 100,
      setFunction: onBlur,
      rest: 'px'
    },
    {
      index: "Contrast",
      value: contrast,
      max: 100,
      setFunction: onContrast,
      rest: '%'
    },
    {
      index: "Grayscale",
      value: grayscale,
      max: 100,
      setFunction: onGrayscale,
      rest: '%'
    },
    {
      index: "Saturate",
      value: saturate,
      max: 100,
      setFunction: onSaturate,
      rest: '%'
    },
    {
      index: "Sepia",
      value: sepia,
      max: 100,
      setFunction: onSepia,
      rest: '%'
    },
    {
      index: "Invert",
      value: invert,
      max: 100,
      setFunction: onInvert,
      rest: '%'
    },
    {
      index: "Hue-rotate",
      value: hueRotate,
      max: 360,
      setFunction: onHueRotate,
      rest: 'deg'
    },
    {
      index: "Rotation",
      value: rotation,
      max: 360,
      setFunction: onRotation,
      rest: 'deg'
    },
    {
      index: "RotationX",
      value: rotationX,
      max: 360,
      setFunction: onRotationX,
      rest: 'deg'
    },
    {
      index: "RotationY",
      value: rotationY,
      max: 360,
      setFunction: onRotationY,
      rest: 'deg'
    },
  ]

  return (
    <div className="image-container">
      <div className="container" >
        <div className="settings">
          {
            jsxArray.map(items => 
              <ImageSlider
                key={items.index}
                max={items.max}
                value={items.value}
                onChange={items.setFunction}
              >
                <span style={{ color: `${fontColor}` }}>
                  {items.index}: {items.value} {items.rest}
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