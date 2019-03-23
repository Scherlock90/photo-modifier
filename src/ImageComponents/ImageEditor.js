import React from 'react';
import logo from '../logo.svg';
import defaultImage from '../Image/sen.jpg'

const data = {
    image : defaultImage,
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
      }
    ]
  }
  
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
        imageField: '',
        rotation: 0,
        width: 0,
        height: 0,
         x: 0,
         y: 0,
        AllPix: 0
      }
    }
    _onMouseMove = (e) => {
    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  }
  onBoundsElement = (e) => {
      let guitarBounds = document.querySelector('.guitar');
      let bounds = guitarBounds.getBoundingClientRect();
      console.log( bounds.width + ' width' + ' i ' + bounds.height + ' height.');
      this.setState({
        width: bounds.width,
        height: bounds.height,
        AllPix: bounds.width * bounds.height
      })    
  }
    onImgLoad = ({ target: img }) => {
    this.setState({
      width: img.width,
      height: img.height
    });
  };
    componentDidMount () {
      if (this.props.settings[6].value > 0) {
            this.onBoundsElement();
          }
        this.setState({
         width: this.state.width,
         height: this.state.height
      });
    }  
    rotate = (e) => {
      let newRotation = this.state.rotation + 60;
      this.onBoundsElement();
      if(newRotation >= 360){
        newRotation = 360;
      }
      this.setState({
        rotation: newRotation
      })
    }
    rotateleft = (e) => {
      let newRotation = this.state.rotation - 60; 
      this.onBoundsElement();     
      if(newRotation <= -360){
        newRotation = -360;
      }
      this.setState({
        rotation: newRotation,
      })
    }
    
//image Upload elements
  fileHandler = (event) => {
      event.preventDefault();
      this.setState({imageField: URL.createObjectURL(event.target.files[0])
      })
    }
    render(){
      let { rotation, width, height, x, y, AllPix } =  this.state;
      let newRot = rotation;
      let newSett = this.props.settings[6].value;
      newSett = newRot;
      const imgStyle = {
        transform: `rotate(${this.props.settings[6].value}deg) rotate(${rotation}deg)`,
        filter: ` contrast(${this.props.settings[0].value}) hue-rotate(${this.props.settings[1].value}) brightness(${this.props.settings[2].value}) saturate(${this.props.settings[3].value}) sepia(${this.props.settings[4].value})
        invert(${this.props.settings[5].value})`,
        backgroundImage:`url(${this.props.url})`
      }
      if ( newRot > 0) {
        console.log('value' + newSett + ' ' + newRot);
        console.log(newRot = newSett);
        newSett = newRot;         
      }
      else if (newSett == 360) {
        return 360
      }

      const imgStyle2 = {
        maxWidth: '30%',
        maxHeight: '90%',
        padding: '1em',
        lineHeight: '1.5em',
        color: 'white',
        textAlign: 'left'
      }
      const imgStyle3 = {
        padding: '3em',
        maxWidth: '85%',
        maxHeight: '90%'
      }
      const imageContainerUpload = {
          width: 'auto',
          height: '800px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
      }
      const calcStyle = {
          textAlign: 'left'
      }
      const styleTitle = {
          color: 'white',
          fontSize: '40px'
      }
      return(
        <div className="imageContainer">
          <form style={imageContainerUpload} action="/upload" method="POST" encType="multipart/form-data" onSubmit={this.handleSumbit}>
            <div className='containerGuitar' style={imgStyle3}>
            <div>
              <p style={styleTitle}> React Photo-Modifier</p>
              <img src={logo} className="App-logo" alt="logo" />
          </div>
              <div style={imgStyle3}>
                <img id="ing" 
                    src={this.state.imageField}
                    className="guitar" 
                    style={imgStyle}
                    onClick={this.onBoundsElement}
                    onMouseMove={this._onMouseMove}
                    onLoad={this.onImgLoad} 
                />
              </div>
            </div>
            <div style={imgStyle2}>
              <input type="file" id="imageField" onChange={this.fileHandler} />
              <div>
                <input onClick={this.rotateleft} type="button" value="Lewo" />
                <input onClick={this.rotate} type="button" value="Prawo" />                
              </div>
              <input onClick={this.onBoundsElement} type="button" value="Value of Height/Width/Px" />
              <div style={calcStyle}>
                <p>Width: {width} </p>
                <p>Height: {height} </p>
                <p> Px: {AllPix} </p>
                <p>Width inside img: { x }</p>
                <p>Height inside img: { y }</p>
              </div>              
            </div>                  
          </form>
        </div>
      )
    }
  }
  
  ImageEditor.defaultProps = {
    data : data
  }