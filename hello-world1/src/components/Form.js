import React, { Component } from 'react';
import './myStyles.css';

export class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username: '',
       comment: '',
       topic: 'react'
    }
  }
  handleNameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  handleCommentsChange = (event) =>{
    this.setState({
      comment: event.target.value
      // event.target.value has the value that is entered
    })
  }
  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value
    })
  }
  handleSubmit = (event) =>{
    alert(`Hi ${this.state.username}. Your comments were ${this.state.comment} on the topic ${this.state.topic}`)
    event.preventDefault();
    // this does not clear the data when we give OK
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          Form Component
          <div> 
            <label>Username: </label>
            <input type='text' value={this.state.username} onChange={this.handleNameChange}></input>
          </div>
          <div className='margin'>
            <label>Comment</label>
            <textarea value={this.state.comment} onChange={this.handleCommentsChange}></textarea>
          </div>
          <div className='margin'>
            <label>Topics</label>
            <select value={this.state.topic} onChange={this.handleTopicChange}>
              <option value='react'>React</option>
              <option value='typescript'>TypeScript</option>
              <option value='vue'>Vue</option>
            </select>
          </div>
          <div>
            <button type='submit'>Submit</button>
            <button onClick={this.handleSubmit}>Submit Form</button>
            {/* using type = submit helps user to submit form by clicking enter key */}
          </div>
        </div>
      </form>
      
    )
  }
}

export default Form