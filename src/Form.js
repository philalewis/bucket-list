import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      description: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleClick = event => {
    event.preventDefault()
    const newItem = {
      title: this.state.title,
      description: this.state.description
    }
    this.props.addItem(newItem)
    this.setState({ title: '', description: '' })
  }

  render() {
    return (
      <form>
        <input
          name='title'
          type="text"
          className="title-input"
          placeholder="title"
          value={this.state.title}
          onChange={event => this.handleChange(event)}
        />

        <input
          name='description'
          type="text"
          className="description-input"
          placeholder="description"
          value={this.state.description}
          onChange={event => this.handleChange(event)}
        />

        <button onClick={event => this.handleClick(event)}>ADD TO BUCKET LIST</button>
      </form>
    )
  }
}

export default Form