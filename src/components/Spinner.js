import React, { Component } from 'react'
import loading from "./loading2.gif"
export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center mx-1"> 
        <img src={loading} alt="Loading" />
      </div>
    )
  }
}
