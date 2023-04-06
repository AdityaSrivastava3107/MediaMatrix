import React, { Component } from 'react'
import NewsList from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=02e342880cbe4c5b8b4705fa883b45d3&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles,
       totalResults: parsedData.totalResults,
       loading: false})
  }

  handlepreviousClick = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=02e342880cbe4c5b8b4705fa883b45d3&page=${this.state.page-1}&pagesize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      page: this.state.page -1,
      articles: parsedData.articles,
      loading: false
    })
  }
  
  handlenextClick = async ()=>{
    if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){
    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=02e342880cbe4c5b8b4705fa883b45d3&page=${this.state.page+1}&pagesize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({
        page: this.state.page +1,
        articles: parsedData.articles,
        loading: false
      })}
  }

  render() {
    return (
      <div className=" container my-4 ">
        <h2 className="text-center"><strong>MediaMatrix</strong>- Headline Havoc</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {!this.state.loading &&this.state.articles.map((element)=>{
          return <div className="col-md-4" key={(element.url)}>
          <NewsList title = {element.title} description = {element.description} imgurl = {element.urlToImage} Link = {element.url}/>
          </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1}type="button" className="btn btn-dark" onClick={this.handlepreviousClick}>&larr; Previous</button>
        <button disabled= {this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handlenextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
