import React from 'react'

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
        name: '',
        imageField: '',
        rotation: 0
      }
    }
    rotate = () =>{
      let newRotation = this.state.rotation + 60;
      if(newRotation >= 360){
        newRotation = 360;
        // newRotation = 0;
      }
      this.setState({
        rotation: newRotation,
      })
    }

    rotateleft = () => {
      let newRotation = this.state.rotation - 60;
      if(newRotation <= 0){
        newRotation = 0;
      }
      this.setState({
        rotation: newRotation,
      })
    }
    handleChange = (e) => {
            this.setState({
              [e.target.id]: e.target.value  
            })
        }
//image Upload elements
        fileChangedHandler = (event) => {
            event.preventDefault();
            this.setState({imageField: URL.createObjectURL(event.target.files[0])
            })
          }
          uploadHandler = () => { 
            console.log(this.state.imageField)
          }
    render(){
      const { rotation } =  this.state;
      const imgStyle = {
        transform: `rotate(${this.props.settings[6].value}deg)`,
        filter: ` contrast(${this.props.settings[0].value}) hue-rotate(${this.props.settings[1].value}) brightness(${this.props.settings[2].value}) saturate(${this.props.settings[3].value}) sepia(${this.props.settings[4].value})
        invert(${this.props.settings[5].value})`,
        backgroundImage:`url(${this.props.url})`
      }
      const imgStyle2 = {
        maxWidth: '15%',
        maxHeight: '90%',
        padding: '1em',
        
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
            <div style={imgStyle3}>
              <img src={this.state.imageField} className="guitar" style={imgStyle}/>
            </div>
            <div style={imgStyle2}>
              <input type="file" id="imageField" onChange={this.fileChangedHandler} />
            </div>                  
          </form>
        </div>
      )
    }
  }
  
  ImageEditor.defaultProps = {
    data : data
  }