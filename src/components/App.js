import React, { Component } from 'react';
import { Link } from 'react-router';
import '../App.css';
import List from './List';
import AddGrudge from './AddGrudge';

class App extends Component {

  constructor(){
    super();
    this.state = {
      grudges: ''
    }
  }

  componentWillMount(){
    fetch('/grudges')
      .then((res) => { return res.json(); })
      .then((response) => {
        console.log(response);
        this.setState({grudges: response})
      })
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h2>Forgiveness Box</h2>
          <List grudges={this.state.grudges}/>
          <Link to={'/add'}>
            Add a new forgiveness goal
          </Link>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default App;
