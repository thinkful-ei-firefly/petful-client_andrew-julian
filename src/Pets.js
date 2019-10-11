import React, { Component } from 'react';
import Cat from './Cat';
import Dog from './Dog';

class Pets extends Component {

  render() {
    return (
      <div className="pets">
        <h1>Currently availalbe for adoption</h1>
        
        <Cat cats={this.props.cats}/>
        <Dog dogs={this.props.dogs}/>
      </div>

    )

  }
}

export default Pets;