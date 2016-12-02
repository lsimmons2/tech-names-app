import React, { Component } from 'react';
import Name from './name';
import NameList from './name-list';

class NameContainer extends Component {
  render(){
    return (
      <div id="name-container">
        < Name addName={this.props.addName} />
        < NameList actions={this.props.actions} names={this.props.names}/>
      </div>
    )
  }
}

export default NameContainer
