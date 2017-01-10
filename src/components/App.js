import React, { Component } from 'react';
import { Link } from 'react-router';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Forgiveness Box</h2>
          <Link to={'/add'}>
            Add a new forgiveness goal
          </Link>
        </div>
      </div>
    );
  }
}

export default App;
