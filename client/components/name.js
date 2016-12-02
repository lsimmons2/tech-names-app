import React, { Component } from 'react';
import NameDisplay from './name-display';
class Name extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: ''
    }
  }

  handleChange(event){
    this.setState({
      name: event.target.value
    })
  }

  deleteLetter(){
    this.setState({
      name: this.state.name.substring(0, this.state.name.length-1)
    })
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.addName(this.state.name);
    this.state.name = '';
  }

  render(){
    return (
      <div className="name">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange.bind(this)}
          />
          <input
            type="submit"
            value="Add"
          />
        </form>

      </div>
    )
  }

}

export default Name
