import React, { Component } from 'react';

class NameDisplay extends Component {
  render(){
    return (
      <div>
        From my parent component: {this.props.text}
      </div>
    )
  }
}

export default NameDisplay
