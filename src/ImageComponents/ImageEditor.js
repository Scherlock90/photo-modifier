import React, { useState } from 'react';
import './imageEditor.css';
import logo from '../logo.svg';
import defaultImage from '../Image/sen.jpg';
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/lab/Slider";

const ImageSlider = ({ value, max, onChange, children }) => (
    <>
      <Typography id="label">
        {children}
      </Typography>
      <Slider
        min={0}
        max={max}
        value={value}
        step={1}
        onChange={onChange}
      />
    </>
)

export default function ImageEditor () {
  const [contrast, setContrast] = useState(1);
  const [blur, setBlur] = useState(0);
  const [brightness, setBrightness] = useState(1);
  const [invert, setInvert] = useState(0);
  const [saturate, setSaturate] = useState(1);
  const [sepia, setSepia] = useState(0);
  const [grayscale, setGrayscale] = useState(0);
  const [hueRotate, setHueRotate] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [allPix, setAllPix] = useState(0);
  const [color, setColor] = useState('#1de9b6');
  const [image, setImage] = useState(defaultImage);
  let deg = 'deg'; 
  let percent = '%'; 
  let px = 'px';

  function onBlur (e, blur) { 
    setBlur(blur);
    return blur
  }
  function onOpacity (e, opacity) { 
    setOpacity(opacity);
    return opacity
  }
  function onBrightness (e, brightness) { 
    setBrightness(brightness);
    return brightness
  }
  function onGrayscale (e, grayscale) {    
    setGrayscale(grayscale);
    return grayscale
  }
  function onContrast (e, contrast) {    
    setContrast(contrast);
    return contrast
  }
  function onInvert (e, invert) {    
    setInvert(invert);
    return invert
  }
  function onSaturate (e, saturate) {    
    setSaturate(saturate);
    return saturate
  }
  function onSepia (e, sepia) {    
    setSepia(sepia);
    return sepia
  }
  function onHueRotate (e, hueRotate) {    
    setHueRotate(hueRotate);
    return hueRotate
  }
  function onRotation (e, rotation) {  
    setRotation(rotation);
    if(rotation >= 1){
      onBoundsElement(setAllPix);
    }   
    return rotation
  }
  function onRotationX (e, rotationX) {  
    setRotationX(rotationX); 
    if(rotationX >= 1){
      onBoundsElement(setAllPix);
    }   
    return rotationX
  }
  function onRotationY (e, rotationY) {  
    setRotationY(rotationY); 
    if(rotationY >= 1){
      onBoundsElement(setAllPix);
    }   
    return rotationY
  }
  function onBoundsElement(e){
      let guitarBounds = document.querySelector('.imgStyle');
      let bounds = guitarBounds.getBoundingClientRect();
      setWidth(parseInt(bounds.width.toFixed(0)));
      setHeight(parseInt(bounds.height.toFixed(0)));
      setAllPix(parseInt(bounds.width.toFixed(0)) * parseInt(bounds.height.toFixed(0)));
      return {width, height, allPix}
  }
  function fileHandler (e) {
    setImage(URL.createObjectURL(e.target.files[0])
    )
  }
  const imgStyle = {
    transform: `rotate(${rotation}deg) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`,
    filter: `blur(${blur}px) sepia(${sepia}) grayscale(${grayscale}) saturate(${saturate}) invert(${invert}) contrast(${contrast}) brightness(${brightness}) opacity(${opacity}) hue-rotate(${hueRotate}deg)`,
  }
  const container = {
    color: color,
    borderRadius: '5%',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    gridTemplateRows: '80px 200px',
    gridGap: '200px',
    padding: '10px',
    height: '650px',
    backgroundColor: 'rgba(28,34,47,.5)'
  }
  const buttonStyle = {
    cursor: 'pointer'
  }
  const valueStyle = {
    padding: '50% 0 50% 0',
    width: '232px',
    maxHeight: '1000px',
    height: '300px',
    borderRadius: '5%'
  }
  const parametersStyle = {
    height: '50px',
    width: '200px',
    marginBlockEnd: '0',
    marginBlockStart: '0',
    padding: '1em',
    color: color,
  }
  const colorStyle = {
    color: color,
  }
  const headerTitle = {
    color: color,
    fontSize: '40px',
    padding: '1em 0 0 0'
  }
  const containerImage = {
    padding: '3.5em 0 3.5em 0'
  }
  return (
      <div>
      <div style={container}>
        <div className="settings">
          <ImageSlider
              max={1}
              value={opacity}
              onChange={onOpacity}
          >
            <span style={colorStyle}>
              Opacity {opacity}
            </span>
          </ImageSlider>
          <ImageSlider
              max={100}
              value={brightness}
              onChange={onBrightness}
          >
            <span style={colorStyle}>
              Brightness {brightness} {percent}
            </span>
          </ImageSlider>
          <ImageSlider
              max={100}
              value={blur}
              onChange={onBlur}
          >
            <span style={colorStyle}>
              Blur {blur} {px}
            </span>
          </ImageSlider>
          <ImageSlider
              max={100}
              value={contrast}
              onChange={onContrast}
          >
            <span style={colorStyle}>
              Contrast {contrast} {percent}
            </span>
          </ImageSlider>
          <ImageSlider
              max={100}
              value={grayscale}
              onChange={onGrayscale}
          >
            <span style={colorStyle}>
              Grayscale {grayscale} {percent}
            </span>
          </ImageSlider>
          <ImageSlider
              max={100}
              value={saturate}
              onChange={onSaturate}
          >
            <span style={colorStyle}>
              Saturate {saturate} {percent}
            </span>
          </ImageSlider>          
          <ImageSlider
              max={100}
              value={sepia}
              onChange={onSepia}
          >
            <span style={colorStyle}>
              Sepia {sepia} {percent}
            </span>
          </ImageSlider>
          <ImageSlider
              max={100}
              value={invert}
              onChange={onInvert}
          >
            <span style={colorStyle}>
              Invert {invert} {percent}
            </span>
          </ImageSlider>
          <ImageSlider
              max={360}
              value={hueRotate}
              onChange={onHueRotate}
          >
            <span style={colorStyle}>
              Hue-rotate {hueRotate} {deg}
            </span>
          </ImageSlider>
          <ImageSlider
              max={360}
              value={rotation}
              onChange={onRotation}
          >
            <span style={colorStyle}>
              Rotation {rotation} {deg}
            </span>
          </ImageSlider>
          <ImageSlider
              max={360}
              value={rotationX}
              onChange={onRotationX}
          >
            <span style={colorStyle}>
              RotationX {rotationX} {deg}
            </span>
          </ImageSlider>
          <ImageSlider
              max={360}
              value={rotationY}
              onChange={onRotationY}
          >
            <span style={colorStyle}>
              RotationY {rotationY} {deg}
            </span>
          </ImageSlider>
        </div>
        <div>
          <div style={containerImage}>
            <div style={headerTitle}>
              React Photo-Modifier <br/> with Hooks
            </div>  
            <div>
              <span>
                <img src={logo} className="App-logo" alt="logo" />
              </span>   
            </div>          
            <img src={image} style={imgStyle} className="imgStyle" onClick={onBoundsElement} />
          </div> 
        </div>
        <div style={valueStyle} className="valueStyle2">
          <p style={parametersStyle}>Width: {width} px</p>
          <p style={parametersStyle}>Height: {height} px</p>
          <p style={parametersStyle}>Size: {allPix} px</p>
          <div className="buttonImage">
            <input type="file" id="image" onChange={fileHandler} />
          </div>
          <div className="buttonOnSettings">
              <button style={buttonStyle} onClick={() => setColor('#00e5ff') }>Change color</button>
            </div>
          <div className="buttonImage">
            <button onClick={onBoundsElement} className="cursorPointer" type="button"  >Value of Height/Width/Size"</button>
          </div>
        </div>
      </div>
    </div>
  )  
}