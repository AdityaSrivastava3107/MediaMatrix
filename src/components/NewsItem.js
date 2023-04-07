import React, { Component } from 'react'

export class NewsList extends Component {
  render() {
    let { title, description, imgurl, Link, author, source } = this.props
    return (
      <div className="my-3">
        <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-dark" style={{ left: "90%", zIndex: "1" }}>{source}</span>
          <img src={!imgurl ? "https://www.shutterstock.com/image-vector/background-screen-saver-on-breaking-260nw-1538146961.jpg" : imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By- <strong>{!author ? "Unknown" : author}</strong></small></p>
            <a href={Link} target="_blank" className="btn btn-sm btn-outline-secondary" rel="noreferrer">Know more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsList
