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
        <Form addItem={this.addItem} />
        {/* <AllItems /> */}
      </main>
    )
  }
}

export default App;
