import React, { Component } from 'react';
import NameContainer from './name-container';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';
import UserInfo from './user-info';

class App extends Component {
  render(){
    return (
      <div id="header">
        <h2>Guess the tech names</h2>
        < UserInfo
          user={this.props.user}
          createNewUserId={this.props.actions.createNewUserId}
          actions={this.props.actions}
        />
        < NameContainer
          addName={this.props.actions.addName}
          actions={this.props.actions}
          names={this.props.names}
        />
      </div>
    )
  }
}

function mapStateToProps(state){
  return state;
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
