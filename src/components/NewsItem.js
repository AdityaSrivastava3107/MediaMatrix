import React, { Component } from 'react'

export class NewsList extends Component {
  render() {
    let  {title, description, imgurl} = this.props
    return (
      <div className = "my-3">
        <div className="card" style={{width: "18rem"}}>
        <img src= {imgurl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="/" className="btn btn-sm btn-outline-primary">Know more</a>
        </div>
      </div>
      </div>
    )
  }
}

export default NewsList
