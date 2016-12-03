import React from 'react';

class NamesContainer extends React.Component {

  constructor(props){

    super(props);
    let pair = this.pair = props.pair;
    if (Math.random() < 0.5){
      this.tech1 = pair.notReal;
      this.tech2 = pair.real;
    } else {
      this.tech2 = pair.notReal;
      this.tech1 = pair.real;
    }

  }


  handleTech(techName){
    if ( this.pair.real.name === techName ){
      console.log('right!');
    } else {
      console.log('wrong!');
    }
  }

  render(){
    return (
      <div className="row">
        <div className="col-xs-6 outer-name-container" onClick={this.handleTech.bind(this, this.tech1.name)}>
          <div className="inner-name-container">
            {this.tech1.name}
          </div>
        </div>
        <div className="col-xs-6">
          <div className="inner-name-container" onClick={this.handleTech.bind(this, this.tech2.name)}>
            {this.tech2.name}
          </div>
        </div>
      </div>
    )
  }

}

export default NamesContainer
