import React, { Component } from 'react';
import ImageUpload from '../ImageComponents/ImageUpload';

class NewsActually extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        const styleImage = {
            width: '100%',
            maxWidth: '360px',
            textAlign: 'center',
            maxHeight: '40vh',
            minHeight: '40vh'
          }

        console.log(this.props);
        const { newsActually, deleteNewsActually, rotateLeft, rotateRight} = this.props;
        const newsActuallyList = newsActually.map( newsAct => {
            return (
        <div className="rowFestival"  key={newsAct.id}>
            <div id="festSection1" onClick={this.props.onClick}>
                <div id="f1" className="columnFestival  imagecolumnFestival">
                    <img style={{transform: `rotate(${newsAct.rotation}deg)`}} src={newsAct.imageField} />  
                </div>
                <div id="f2" className="columnFestival  textColumn">
                    <p className="secondSeqTable"> {newsAct.name } </p>
                    <p className="secondSeqTable"> {newsAct.textField}</p>
                    <p className="secondSeqTableDescirption">{this.props.descriptionTable1}</p>
                    <button onClick={() => {deleteNewsActually(newsAct.id)}}>Usuń aktualność</button>
                    <button onClick={() => {rotateLeft(newsAct.rotation)}}>rotateLeft</button>
                    <button onClick={() => {rotateRight(newsAct.rotation)}}>rotateRight</button>
                </div>
            </div>
        </div>
            )
        })
        return (
          <div className="newsActullyList">
              {newsActuallyList}
          </div> 
        )
    }
}

export default NewsActually;