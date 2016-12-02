import React, { Component } from 'react';
import NameItem from './name-item';


class NameList extends Component {
  render(){
    return (
      <ul>
        {
          this.props.names.map( name => {
            return <NameItem
              key={name.id}
              name={name}
              actions={this.props.actions}
            />
          })
        }
      </ul>
    )
  }
}

export default NameList
