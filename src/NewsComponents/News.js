import React, { Component } from 'react';
import NewsActually from './NewsActually';
import AddNews from './AddNews';
import './news.css';
import './news2.css';
 
class News extends Component{
  constructor(props) {
    super(props);
    this.state = {
      newsActually : [ ],
      rotation: 0
      };
  }
    addNewsActually = (aNewsA) => {
        aNewsA.id = Math.random();
        let newsActually = [...this.state.newsActually, aNewsA]
        this.setState({
          newsActually: newsActually
        })
    }
    deleteNewsActually = (id) => {
    let newsActually = this.state.newsActually.filter(aNewsA => {
      return aNewsA.id !== id
    });
    this.setState({
      newsActually: newsActually
    })
   }
    rotateRight = (rotation) => {
      let newRotation = this.state.rotation + 60;
      if(newRotation >= 360){
        newRotation =- 360;
      }
      this.setState({
        rotation: newRotation,
      })
    }
    rotateLeft = (rotation) => {
      let newRotation = this.state.rotation - 60;
      if(newRotation >= 360){
        newRotation =- 360;
      }
      this.setState({
        rotation: newRotation,
      })
      return newRotation !== rotation
    }

  render() {
  return(
        <div className="contentPages">
            <div >
                <NewsActually 
                  deleteNewsActually={this.deleteNewsActually}
                  newsActually={this.state.newsActually}
                  rotateRight={this.state.rotateRight}
                  rotateLeft={this.state.rotateLeft}
                />
            </div>
              <AddNews addNewsActually={this.addNewsActually} />
        </div>
    )
  }
}
 
export default News;