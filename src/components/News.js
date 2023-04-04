import React, { Component } from 'react'
import NewsList from './NewsList'

export class News extends Component {
  render() {
    return (
      <div className="container mx-1">
        news component.
        <NewsList/>
      </div>
    )
  }
}

export default News
