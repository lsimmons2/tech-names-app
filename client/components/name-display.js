import React, { Component } from 'react';

class NameDisplay extends Component {

  deleteLetter(){
    this.props.deleteLetter();
    // console.log(this);
  }

  render(){
    return (
      <div>
        From my parent component: {this.props.text}
        <button onClick={this.deleteLetter.bind(this)}>Delete letter</button>
      </div>
    )
  }
}

export default NameDisplay
