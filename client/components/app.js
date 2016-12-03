
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';

import TechsContainer from './techs-container';


class App extends Component {

  handleTechs(){
    // console.log(this.props.unguessed);
    console.log(this.props.actions);
  }

  render(){
    return (
      <div className="container">

        <div className="table">

          <div className="row">
            <div className="col-xs-12">
              <div id="header-container">
                <h1 onClick={this.handleTechs.bind(this)}>Which one is a real technology?</h1>
              </div>
            </div>
          </div>

          < TechsContainer
            actions={this.props.actions}
            pair={this.props.unguessed[0]}
          />

        </div>

      </div>


        // {/* < UserInfo
        //   user={this.props.user}
        //   createNewUserId={this.props.actions.createNewUserId}
        //   actions={this.props.actions}
        // /> */}
        // {/* < NameContainer
        //   addName={this.props.actions.addName}
        //   actions={this.props.actions}
        //   names={this.props.names}
        // /> */}
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
