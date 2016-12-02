import React, { Component } from 'react';

class UserInfo extends Component {

  handleNewId(){
    this.props.createNewUserId();
  }

  handleNewIdIfOdd() {
    this.props.actions.createNewUserIdIfOdd();
  }

  handleNewIdAsync() {
    this.props.actions.createNewUserAsyc();
  }

  render(){
    return (
      <li>
        <h4>Username: {this.props.user.username}</h4>
        <h4>Id: {this.props.user.id}</h4>
        <button onClick={this.handleNewId.bind(this)}>Update with rando ID</button>
        <button onClick={this.handleNewIdIfOdd.bind(this)}>Update only if odd</button>
        <button onClick={this.handleNewIdAsync.bind(this)}>Update async</button>
      </li>
    )
  }
}

export default UserInfo
