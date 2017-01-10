import React, { Component } from 'react';

export default class AddGrudge extends Component {

  constructor(){
    super();
    this.state = {
      name: '',
      grievance: '',
      forgiven: false
    }
  }

  submitGrudge(){
    
  }

  render() {
    return (
      <div className={'add-form'}>
        <h1>
          Add new forgiveness candidate:
        </h1>
        <form className='new-grudge-form'
              onSubmit={ (e) => {
                e.preventDefault()
                console.log('form-submitted')} }>
          <label>
            <h2>Name of forgiveness target:</h2>
            <input
              placeholder='Enter name here'
              onKeyUp={(e)=> this.setState({name: e.target.value}) }/>
          </label>
            <label>
            <h2>Describe your grievance:</h2>
            <textarea
              placeholder='Describe grievance here'
              onKeyUp={ (e)=> this.setState({grievance: e.target.value}) }/>
          </label>
          <label>
            <h2>Have you let go of this grievance?</h2>
            <select value={this.state.value}
                    onChange={(e)=>this.setState({forgiven: e.target.value}) }>
              <option value=''>No</option>
              <option value='true'>Yes</option>
            </select>
          </label><br></br>
            <button children='Submit' disabled={!this.state.name} />
        </form>
      </div>
    );
  }
}
