import React, { Component } from 'react'
import './App.css';
import Form from './Form'
import AllItems from './AllItems'

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: []
    }
  }

  addItem = item => {
    this.setState({ items: [...this.state.items, item] })
  } 

  render() {
    return (
      <main>
        <h1>Bucket List</h1>
        <Form addItem={this.addItem} />
        <AllItems items={ this.state.items } />
      </main>
    )
  }
}

export default App;
