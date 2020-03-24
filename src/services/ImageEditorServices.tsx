import React, { useState } from 'react';
import defaultImage from '../assets/images/sen.jpg';

export const ImageEditorServices = () => {

  const [contrast, setContrast] = useState(1)
  const [blur, setBlur] = useState(0)
  const [brightness, setBrightness] = useState(1)
  const [invert, setInvert] = useState(0)
  const [saturate, setSaturate] = useState(1)
  const [sepia, setSepia] = useState(0)
  const [grayscale, setGrayscale] = useState(0)
  const [hueRotate, setHueRotate] = useState(0)
  const [opacity, setOpacity] = useState(1)
  const [rotation, setRotation] = useState(0)
  const [rotationX, setRotationX] = useState(0)
  const [rotationY, setRotationY] = useState(0)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [allPix, setAllPix] = useState(0)
  const [fontColor, setColor] = useState('#1de9b6')
  const [image, setImage] = useState(defaultImage)

  const onBlur = (e: any, blur: number) => setBlur(blur)
  const onOpacity =(e: any, opacity: number) => setOpacity(opacity)
  const onBrightness = (e: any, brightness: number) => setBrightness(brightness)
  const onGrayscale = (e: any, grayscale: number) => setGrayscale(grayscale)
  const onContrast =(e: any, contrast: number) => setContrast(contrast)
  const onInvert = (e: any, invert: number) => setInvert(invert)
  const onSaturate = (e: any, saturate: number) => setSaturate(saturate)
  const onSepia = (e: any, sepia: number) => setSepia(sepia)
  const onHueRotate = (e: any, hueRotate: number) => setHueRotate(hueRotate)

  const onBoundsElement = (setState?: Function): { width: number; height: number; allPix: number } => {
    let guitarBounds = document.querySelector('.img-design');
    let bounds = guitarBounds.getBoundingClientRect();
    setWidth(parseInt(bounds.width.toFixed(0)));
    setHeight(parseInt(bounds.height.toFixed(0)));
    setAllPix(parseInt(bounds.width.toFixed(0)) * parseInt(bounds.height.toFixed(0)));
    return { width, height, allPix }
  }

  const onRotation = (e: any, rotation: number) => {
    setRotation(rotation);
    if (rotation >= 1) {
      onBoundsElement(setAllPix);
    }
  }

  const onRotationX = (e: any, rotationX: number) => {
    setRotationX(rotationX);
    if (rotationX >= 1) {
      onBoundsElement(setAllPix);
    }
  }

  const onRotationY = (e: any, rotationY: number) => {
    setRotationY(rotationY);
    if (rotationY >= 1) {
      onBoundsElement(setAllPix);
    }
  }

  const fileHandler = (e: React.ChangeEvent<HTMLInputElement>) => 
    setImage(URL.createObjectURL(e.target.files[0]))

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

  return {
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
  }
}
