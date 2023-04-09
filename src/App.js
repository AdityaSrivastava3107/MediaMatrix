import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  pageSize = 18;
  apiKey= process.env.REACT_APP_API_KEY 
  state={
    progress:10
  }
  setProgress=(progress)=>{
    this.setState({progress : progress})
  }
  
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key='general' pageSize={this.pageSize} country="in" category="general" />}></Route>
            <Route exact path="/business" element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key='business' pageSize={this.pageSize} country="in" category="business" />}></Route>
            <Route exact path="/entertainment" element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key='entertainment' pageSize={this.pageSize} country="in" category="entertainment" />}></Route>
            <Route exact path="/health" element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key='health' pageSize={this.pageSize} country="in" category="health" />}></Route>
            <Route exact path="/science" element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key='science' pageSize={this.pageSize} country="in" category="science" />}></Route>
            <Route exact path="/sports" element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key='sports' pageSize={this.pageSize} country="in" category="sports" />}></Route>
            <Route exact path="/technology" element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key='technology' pageSize={this.pageSize} country="in" category="technology" />}></Route>
            <Route exact path="/Headlines" element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key='Headlines' pageSize={this.pageSize} country="in" category="Headlines" />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}



