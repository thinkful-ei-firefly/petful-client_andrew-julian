import React, { Component } from 'react';


class Dog extends Component {

  state = {
    dogs : 
      [{
        imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
        imageDescription: 'Great friend with one big spot.',
        name: 'Spot',
        sex: 'Male',
        age: 2,
        breed: 'Mixed',
        story: 'run away'
      },
      {
        imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
        imageDescription: 'Great friend with one big spot.',
        name: 'Spot',
        sex: 'Male',
        age: 2,
        breed: 'Mixed',
        story: 'run away'
      }],
      qPos: 0
    
  }

  


  render() {
    return (
      <div className="pets">
        <h2>Dog</h2>
          <div>
            <img src={this.state.dogs.imageURL}/>
            <p>{this.state.dogs.name}</p>
          </div>
        
      </div>

    )

  }
}

export default Dog;