import React from 'react';
import {Route, Switch} from "react-router-dom";
import Landing from './Landing';
import Pets from './Pets';

import './App.css';

function App() {
  return (
    <div>
      <Route exact path = "/" component={Landing} />
      <Route exact path = "/pets" component={Pets} />
    </div>
  );
}

export default App;

// class App extends Component {
// state = {
//   showLanding: true,
// }

// routes () {
//   return (
//     <>
//       <Route exact
//   )
// }
// <Router>
// </Router>

 

// handleViewButtonClick = (e) => {
//   e.preventDefault()
//   this.setState({showLanding: false})

// }

// render() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <Landing viewButton={this.handleViewButtonClick} />
//       <Pets cats={this.cats} dogs={this.dogs}/>
//         <a>
//         </a>
//       </header>
//     </div>
//   );
// }
// }