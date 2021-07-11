import React, { Component } from 'react'
import PostForm from './PostForm'
import Allpost from './AllPost'

class App extends Component{

  render() {
    return (
      <div className="App">
          <PostForm />
          <Allpost />
      </div>
    );
  }
}

export default App;
