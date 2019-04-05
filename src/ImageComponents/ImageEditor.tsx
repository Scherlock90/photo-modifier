import React, { useState, SFC } from 'react';
import './imageEditor.css';
import logo from '../logo.svg';
import defaultImage from '../Image/sen.jpg';
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/lab/Slider";

interface Props {
	value:number;
	max:number;
	onChange(e: any, value: number): void;
}

const ImageSlider: SFC<Props> = ({ value, max, onChange, children }) => (
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
  const [name, setName] = useState('Franek!');
  const [image, setImage] = useState(defaultImage);
  let deg = 'deg'; 
  let percent = '%'; 
  let px = 'px';

  function onBlur (e: any, blur: number) { 
    setBlur(blur);
    return blur
  }
  function onOpacity (e: any, opacity: number) { 
    setOpacity(opacity);
    return opacity
  }
  function onBrightness (e: any, brightness: number) { 
    setBrightness(brightness);
    return brightness
  }
  function onGrayscale (e: any, grayscale: number) {    
    setGrayscale(grayscale);
    return grayscale
  }
  function onContrast (e: any, contrast: number) {    
    setContrast(contrast);
    return contrast
  }
  function onInvert (e: any, invert: number) {    
    setInvert(invert);
    return invert
  }
  function onSaturate (e: any, saturate: number) {    
    setSaturate(saturate);
    return saturate
  }
  function onSepia (e: any, sepia: number) {    
    setSepia(sepia);
    return sepia
  }
  function onHueRotate (e: any, hueRotate: number) {    
    setHueRotate(hueRotate);
    return hueRotate
  }
  function onRotation (e: any, rotation: number) {  
    setRotation(rotation);
    if(rotation >= 1){
      onBoundsElement(setAllPix);
    }   
    return rotation
  }
  function onRotationX (e: any, rotationX: number) {  
    setRotationX(rotationX); 
    if(rotationX >= 1){
      onBoundsElement(setAllPix);
    }   
    return rotationX
  }
  function onRotationY (e: any, rotationY: number) {  
    setRotationY(rotationY); 
    if(rotationY >= 1){
      onBoundsElement(setAllPix);
    }   
    return rotationY
  }
  function onBoundsElement(e: any): { width: number; height: number; allPix: number } {
      let guitarBounds = document.querySelector('.imgStyle');
      let bounds = guitarBounds.getBoundingClientRect();
      setWidth(parseInt(bounds.width.toFixed(0)));
      setHeight(parseInt(bounds.height.toFixed(0)));
      setAllPix(parseInt(bounds.width.toFixed(0)) * parseInt(bounds.height.toFixed(0)));
      return {width, height, allPix}
  }
  function fileHandler (e: any) {
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
    height: '700px',
    backgroundColor: 'rgba(28,34,47,.5)'
  }
  const buttonStyle = {
    cursor: 'pointer'
  }
  const valueStyle = {
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
        <div style={headerTitle}>
          React Photo-Modifier <br/> with Hooks
        </div>  
        <div>
          <span>
            <img src={logo} className="App-logo" alt="logo" />
          </span>   
        </div> 
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
            <img src={image} style={imgStyle} className="imgStyle" onClick={onBoundsElement} />
          </div>          
          <p className="colorStyle" style={colorStyle} > {name}</p>
          <div className="buttonImage">
            <input type="file" id="image" onChange={fileHandler} />
          </div>
          <div className="buttonOnSettings">
              <button style={buttonStyle} onClick={() => setColor('#00e5ff') }>Change color</button>
            </div>
          <div className="buttonOnSettings">
              <button style={buttonStyle} onClick={() => setName('Lucek')}>Change name</button>
          </div>
        </div>
        <div style={valueStyle}>
          <p style={parametersStyle}>Width: {width} px</p>
          <p style={parametersStyle}>Height: {height} px</p>
          <p style={parametersStyle}>Size: {allPix} px</p>
          <div className="buttonImage">
            <button onClick={onBoundsElement} className="cursorPointer" type="button"  >Value of Height/Width/Size"</button>
          </div>
        </div>
      </div>
    </div>
  )  
}