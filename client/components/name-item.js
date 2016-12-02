import React, { Component } from 'react';
class NameItem extends Component {

  handleComplete(){
    this.props.actions.completeName(this.props.name.id);
  }

  handleDelete(){
    this.props.actions.deleteName(this.props.name.id);
  }

  render(){
    return (
      <li>
        <span>{this.props.name.name}</span>
        <button onClick={this.handleComplete.bind(this)}>Mark as real</button>
        <button onClick={this.handleDelete.bind(this)}>Delete name</button>
      </li>
    )
  }
}

export default NameItem
