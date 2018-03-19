import React, { Component } from 'react';

class TaskForm extends Component {
  constructor() {
    super();
    this.state = {
      description: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
  }

  onChangeDescription(event) {
    event.preventDefault();
    this.setState({ description: event.target.value });
  }

  handleSubmit() {

  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label name="description">Description: </label>
        <input name="description" value={this.state.description} onChange={this.onChangeDescription} />
      </form>
    );
  }
}

export default TaskForm;