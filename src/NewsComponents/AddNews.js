import React, { Component} from 'react';

class AddNews extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            textField: '',
            imageField: ''
    }
    this.fileChangedHandler = this.fileChangedHandler.bind(this)
}
        handleChange = (e) => {
            this.setState({
              [e.target.id]: e.target.value  
            })
        }
        handleSumbit = (e) => {
            e.preventDefault();
            this.props.addNewsActually(this.state);
            this.setState({
                name: '',
                textField: '',
                imageField: ''
            })
        }
//image Upload elements
        fileChangedHandler = (event) => {
            event.preventDefault();
            this.setState({
                imageField: URL.createObjectURL(event.target.files[0])
            })
          }

    render () {
        const sizeImage = {
            width: '300px',
            maxHeight: '300px'
        }
        return (
            <div className="addNewsActuallyContent">
                <form action="/upload" method="POST" encType="multipart/form-data" onSubmit={this.handleSumbit}>
                    <label htmlFor="name"> Nazwa aktualności: </label>
                        <input type="text" id="name" onChange={this.handleChange} value={this.state.name} />
                    <br/>
                    <label htmlFor="textField"> Miejsce na tekst: </label>
                        <textarea className="newsField"  type="text" id="textField" onChange={this.handleChange} value={this.state.textField} />
                    <br/>
                        <input type="file" id="imageField" onChange={this.fileChangedHandler} />
                    <br/>
                        <img style={sizeImage} src={this.state.imageField} />
                    <br/>
                        <button onClick={this.handleSumbit}>Dodaj do aktualności</button>
                </form>
            </div> 
        );
    }
}

export default AddNews;