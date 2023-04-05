import React, { Component } from 'react'
import NewsList from './NewsItem'

export class News extends Component {
  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false
    }
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=02e342880cbe4c5b8b4705fa883b45d3";
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles})
  }
  render() {
    return (
      <div className=" container my-4 ">
        <h2><strong>MediaMatrix</strong>- Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={(element.url)}>
          <NewsList title = {element.title?element.title.slice(0,50):""} description = {element.description?element.description.slice(0,59):""} imgurl = {element.urlToImage} Link = {element.url}/>
          </div>
        })}
        </div>
      </div>
    )
  }
}

export default News
