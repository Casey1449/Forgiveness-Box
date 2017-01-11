import React, { Component } from 'react';
import '../App.css';

class List extends Component {
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

  renderListItem(grudgeObj){
    return(
      <li key={Math.random()}>
        <h2>{ grudgeObj.name }</h2>
        <p>grievance: {grudgeObj.grievance}</p>
        <p>forgiven? {grudgeObj.forgiven ?
          <span>Yes</span> : <span>No</span>
          } </p>
      </li>
    )
  }

  render() {

    const { grudges } = this.state

    return (
      <div className="App">
        <div className="App-header">
          <h2>Grudges:</h2>
          <ul>
          { grudges ? grudges.map(g => this.renderListItem(g))
            : <p> none yet</p> }
        < /ul>
        </div>
      </div>
    );
  }
}

export default List;
