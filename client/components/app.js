import React, { Component } from 'react';
import NameContainer from './name-container';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions';


class App extends Component {
  render(){
    return (
      <div id="header">
        Guess the tech names
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
