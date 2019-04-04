import React, { useState, useEffect, SFC, ReactNode } from 'react';
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
      <Slider className="slider"
        min={0}
        max={max}
        value={value}
        aria-labelledby="label"
        step={1}
        onChange={onChange}
      />
    </>
)


export default function imageEditor () {
  const [contrast, setContrast] = useState(1);
  const [brightness, setBrightness] = useState(1);
  const [invert, setInvert] = useState(0);
  const [saturate, setSaturate] = useState(1);
  const [sepia, setSepia] = useState(0);
  const [grayscale, setGrayscale] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [allPix, setAllPix] = useState(0);
  const [color, setColor] = useState('#1de9b6');
  const [name, setName] = useState('Franek!');
  const [image, setImage] = useState(defaultImage);

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
  function onRotation (e: any, rotation: number) {    
    setRotation(rotation);
    return rotation
  }
  function onBoundsElement(e: any): { width: number; height: number; allPix: number } {
      let guitarBounds = document.querySelector('#ing');
      let bounds = guitarBounds.getBoundingClientRect();
      console.log( bounds.width + ' width' + ' i ' + bounds.height + ' height.');
      setWidth(bounds.width);
      setHeight(bounds.height);
      setAllPix(bounds.width * bounds.height);
      return {width, height, allPix}
  }
  function fileHandler (e: any) {
    setImage(URL.createObjectURL(e.target.files[0])
    )
  }
  const container = {
    color: color,
    borderRadius: '5%',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    gridTemplateRows: '80px 200px',
    gridGap: '200px',
    padding: '10px',
    height: '600px',
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
  const imgStyle = {
    transform: `rotate(${rotation}deg)`,
    filter: `sepia(${sepia}) grayscale(${grayscale}) saturate(${saturate}) invert(${invert}) contrast(${contrast}) brightness(${brightness})`,
  }
  const colorStyle = {
    color: color,
  }
  const elementChangingStyle = {
    maxWidth: '600px',
    maxHeight: '600px'
  }
  const headerTitle = {
    color: color,
    fontSize: '40px',
    padding: '1em 0 0 0'
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
              max={100}
              value={brightness}
              onChange={onBrightness}
          >
            <span style={colorStyle}>
              Brightness {brightness}
            </span>
          </ImageSlider>
          <ImageSlider
              max={100}
              value={contrast}
              onChange={onContrast}
          >
            <span style={colorStyle}>
              Contrast {contrast}
            </span>
          </ImageSlider>
          <ImageSlider
              max={100}
              value={grayscale}
              onChange={onGrayscale}
          >
            <span style={colorStyle}>
              Grayscale {grayscale}
            </span>
          </ImageSlider>
          <ImageSlider
              max={100}
              value={saturate}
              onChange={onSaturate}
          >
            <span style={colorStyle}>
              Saturate {saturate}
            </span>
          </ImageSlider>          
          <ImageSlider
              max={100}
              value={sepia}
              onChange={onSepia}
          >
            <span style={colorStyle}>
              Sepia {sepia}
            </span>
          </ImageSlider>
          <ImageSlider
              max={100}
              value={invert}
              onChange={onInvert}
          >
            <span style={colorStyle}>
              Invert {invert}
            </span>
          </ImageSlider>
          <ImageSlider
              max={360}
              value={rotation}
              onChange={onRotation}
          >
            <span style={colorStyle}>
              Rotation {rotation}
            </span>
          </ImageSlider>
          <div className="buttonContainer">
            <div className="buttonOnSettings">
              <button style={buttonStyle} onClick={() => setName('Lucek')}>Change name</button>
            </div>
            <div className="buttonOnSettings">
              <button style={buttonStyle} onClick={() => setColor('#00e5ff') }>Change color</button>
            </div>
          </div>
        </div>
        <div style={elementChangingStyle}>
          <img style={imgStyle} src={image}  className="imgStyle" id="ing" onClick={onBoundsElement} />
          <p className="colorStyle" style={colorStyle} > {name}</p>
          <div className="buttonImage">
            <input type="file" id="image" onChange={fileHandler} />
          </div>
        </div>
        <div style={valueStyle}>
          <p style={parametersStyle}>Width: {width} px</p>
          <p style={parametersStyle}>Height: {height} px</p>
          <p style={parametersStyle}>Size: {allPix} px</p>
          <div className="buttonImage">
            {/* <button onClick={onBoundsElement} className="cursorPointer" type="button"  >Value of Height/Width/Size"</button> */}
          </div>
        </div>
      </div>
    </div>
  )  
}