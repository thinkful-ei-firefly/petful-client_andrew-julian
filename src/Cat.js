import React, { Component } from 'react';



class Cat extends Component {

  state = {
    cats:
      {
        imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
        imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
        name: 'Fluffy',
        sex: 'Female',
        age: 2,
        breed: 'Bengal',
        story: 'Thrown on the street'
      }
  }

  //ComponentDidMount

  render() {
    return (
      <div className="pets">
        <h2>Cat</h2>
        <img src={this.state.cats.imageURL}/>
        <p>{this.state.cats.name}</p>
      </div>

    )

  }
}

export default Cat;