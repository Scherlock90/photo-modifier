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
    rotateImage = (id) => {
      let newsActually = this.state.newsActually.filter(aNewsA => {
        return aNewsA.id !== id
      });
      this.setState({
        newsActually: newsActually
      })
    }

  render() {
  return(
        <div className="contentPages">
            <div >
                <NewsActually 
                  deleteNewsActually={this.deleteNewsActually}
                  newsActually={this.state.newsActually}
                />
            </div>
              <AddNews addNewsActually={this.addNewsActually} />
              
        </div>
    )
  }
}
 
export default News;