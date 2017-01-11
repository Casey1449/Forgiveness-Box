import React, { Component } from 'react';
import { Link } from 'react-router';
import '../App.css';

class List extends Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     grudges: ''
  //   }
  // }
  //
  // componentWillMount(){
  //   fetch('/grudges')
  //     .then((res) => { return res.json(); })
  //     .then((response) => {
  //       console.log(response);
  //       this.setState({grudges: response})
  //     })
  // }

  renderListItem(grudgeObj){
    return(
      <Link to={`/${grudgeObj.id}`}
            activeClassName="active">
        <li key={Math.random()}>
          <p>{ grudgeObj.name }</p>
        </li>
      </Link>
    )
  }

  render() {

    const { grudges } = this.props

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
