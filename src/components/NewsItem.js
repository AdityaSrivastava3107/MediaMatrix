import React, { Component } from 'react'

export class NewsList extends Component {
  render() {
    let  {title, description, imgurl, Link} = this.props
    return (
      <div className = "my-3">
        <div className="card">
        <img src= {!imgurl? "https://www.shutterstock.com/image-vector/background-screen-saver-on-breaking-260nw-1538146961.jpg" : imgurl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a href={Link} target= "_blank" className="btn btn-sm btn-outline-secondary" rel="noreferrer">Know more</a>
        </div>
      </div>
      </div>
    )
  }
}

export default NewsList
