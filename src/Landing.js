import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Landing extends Component {

  render() {
    return (
      <div className="landing">
        <h1>Petful</h1>
        <img src='http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg'/>
        <p>
          Information about Petful, Petful Logo
        </p>
      <Link to='/pets'><button>View pets</button></Link>
      </div>

    )

  }
}

export default Landing;