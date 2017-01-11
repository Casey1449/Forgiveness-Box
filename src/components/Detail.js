import React, { Component } from 'react';
import { Link } from 'react-router';
import List from './List';

class Detail extends Component {
  constructor(){
    super()
    this.state = {
      grudgeObj: ''
    }
  }

  getThisGrudge(id){
    fetch(`/grudges/${id}`)
      .then((res) => { return res.json(); })
      .then((response) => {
        this.setState({grudgeObj: response})
      })
  }

  componentWillMount(){
    let id = this.props.params.id
    this.getThisGrudge(id);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.params !== this.props.params){
    let id = nextProps.params.id
    this.getThisGrudge(id);}
  }

  renderItemDetail(obj){
    return(
      <section>
        <h1>{ obj.name }</h1>
        <h2>grievance: {obj.grievance}</h2>
        <p>forgiven? {obj.forgiven ?
          <span>Yes</span> : <span>No</span>
          } </p>
      </section>
    )
  }

  render() {

    return (
      <div className="detail">
      { this.state.grudgeObj ? this.renderItemDetail(this.state.grudgeObj[0]) : 'fetching'}
      </div>
    );
  }
}

export default Detail;
