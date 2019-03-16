import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import './imageUpload.css';

import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/lab/Slider";

const ImagePixels = ({ value }) => (
	<>
		<Typography>
			Width: {value.w}
			px
		</Typography>
		<Typography>
			Height: {value.h}
			px
		</Typography>
		<Typography>
			Size: {value.size}
			px
		</Typography>
	</>
);

const ImageSlider = ({ value, max, onChange, children }) => (
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
);

 class RotateIMG extends Component {
    constructor(props){
      super(props);
      this.state = {
        rotation: 0,
        pixels: {
          w: 0,
          h: 0,
          size: 0
       },
        prevSize: [0, 0],
        grayscale: 0,
        invert:0,
        huerotate:0,
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
handleRotate = (e, rotation) => {
  this.setState({ rotation });
};
handleInvert = (e, invert) => {
  this.setState({ invert });
};
  handleGrayscale = (e, grayscale) => {
  this.setState({ grayscale });
};
    
    render(){
      const containerImage = {
        height: '300px',
        width: '500px'
      }
      const { rotation } =  this.state;
      return (
        <div className="table">
          <tr>
            <td>
              <Grid container spacing={40}>
                <Grid item xs>
                  <input onClick={this.rotateleft} type="button" value="left" />
                    <img style={{transform: `rotate(${rotation}deg)`, height: '200px'}} src={this.props.src} width="400" />
                  <input onClick={this.rotate} type="button" value="right" />                 
                </Grid>
              </Grid>
            </td>
            <td>
              <Grid container spacing={24}>
                <Grid item xs={12}>
                  <ImageSlider
                      max={360}
                      value={this.state.rotation}
                      onChange={this.handleRotate}
                  > Rotation: {this.state.rotation}
                  </ImageSlider> 
                  
                  <ImageSlider
                      max={100}
                      value={this.state.invert}
                      onChange={this.handleInvert}
                  >
                      Invert {this.state.invert}%
                  </ImageSlider>
                  <ImageSlider
                      max={100}
                      value={this.state.grayscale}
                      onChange={this.handleGrayscale}
                  >
                      Grayscale {this.state.grayscale}%
                  </ImageSlider>
                </Grid> 
              </Grid> 
            </td>
          </tr>  
      </div>
      )
    }
  };
  
  export default class ImageUpload extends Component {
    constructor(props) {
      super(props);
      this.state = {file: '',imagePreviewUrl: ''};
    }
  
    _handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
    }

    render() {
      const imageSize2 = {
        padding: '2em'
      }
      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<RotateIMG src={imagePreviewUrl} />);
      } else {
        $imagePreview = (<div className="previewText"></div>);
      }
  
      return (
        <div className="previewComponent">
          <form style={imageSize2} onSubmit={(e)=>this._handleSubmit(e)}>
                  <input className="fileInput" 
                    type="file" 
                    onChange={(e)=>this._handleImageChange(e)} />
          </form>
          <div className="table">
            <tr>
              <td>
                <div className="imgPreview">
                  {$imagePreview}
                </div>
              </td>
            </tr>
          </div>
        </div>
      )
    }
  }