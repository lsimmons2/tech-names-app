import React, { Component } from 'react';

class UserInfo extends Component {

  handleNewId(){
    this.props.createNewUserId();
  }

  render(){
    return (
      <li>
        <h4>Username: {this.props.user.username}</h4>
        <h4>Id: {this.props.user.id}</h4>
        <button onClick={this.handleNewId.bind(this)}>Update with rando ID</button>
      </li>
    )
  }
}

export default UserInfo
