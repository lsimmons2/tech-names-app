import React, { Component } from 'react';
import NameDisplay from './name-display';

class Name extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: 'bob'
    }
  }

  handleChange(event){
    this.setState({
      name: event.target.value
    })
  }

  render(){
    return (
      <div className="name">
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange.bind(this)}
        />
        < NameDisplay text={this.state.name}/>
      </div>
    )
  }

}

export default Name
