import React, { Component } from 'react'

export class NewsList extends Component {
  render() {
    let { title, description, imgurl, Link, author, source } = this.props
    return (
      <div className="my-3">
        <div className="card" style={{backgroundColor:"#1a1b1f"}}>
          <span className="position-absolute top-0 translate-middle badge rounded-pill " style={{ left: "87%", zIndex: "1", backgroundColor: "#2b4a8a" }}>{source}</span>
          <img src={!imgurl ? "https://www.shutterstock.com/image-vector/background-screen-saver-on-breaking-260nw-1538146961.jpg" : imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title" style={{color: "#dee0e3"}}>{title}...</h5>
            <p className="card-text" style={{color: "#dee0e3"}}>{description}...</p>
            <p className="card-text" style={{color: "#dee0e3"}}><small className="text-body-primary" >By- <strong>{!author ? "Unknown" : author}</strong></small></p>
            <a href={Link} target="_blank" className="btn btn-sm btn-outline-primary" rel="noreferrer">Know more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsList
