import React, { Component } from 'react';

export default class Home extends Component {
  constructor(){
    super();
    this.state = {
      updateValue: '',
      postValue: ''
    }

    this.handlePostChange = this.handlePostChange.bind(this);
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
    this.handleUpdateChange = this.handleUpdateChange.bind(this);
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
  }

  handlePostChange(event) {
    this.setState({postValue: event.target.value});
  }
  handlePostSubmit() {
    fetch('https://sla-db.herokuapp.com/api/home', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        homeIntro: this.state.postValue
      })
    })
    alert('Submitted: ' + this.state.postValue);
  }

  handleUpdateChange(event, id) {
    var id = event.target.id
    this.setState({
      updateValue: event.target.value,
      id: id
    });
    console.log(id);
  }
  handleUpdateSubmit(id) {
    console.log(id)
    var updateValue = this.state.updateValue
    console.log(updateValue);
    fetch('https://sla-db.herokuapp.com/api/home/' + id, {
      method: 'PUT',
      mode: 'CORS',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        homeIntro: updateValue
      })
    })
    alert('Submitted: ' + this.state.updateValue);
  }



  render() {
    let homeStuff = this.props.data
    return (
      <div className="Home">
        <h2>Home</h2>
        {homeStuff.map(a =>
          <div key={a.id}>
            <p>{a.homeIntro}</p>
            <form onSubmit={() =>this.handleUpdateSubmit(a.id)} >
              <textarea rows='7' cols='100' placeholder={a.homeIntro} id={a.id} onChange={this.handleUpdateChange}/>
              <br></br>
              <input type="submit" value="Update" />
            </form>
          </div>)}

          <form onSubmit={this.handlePostSubmit}>
            <label>
              <textarea rows='7' cols='100' onChange={this.handlePostChange} />
            </label>
            <br></br>
            <input type="submit" value="Add New" />
          </form>
          <br></br>
      </div>
    );
  }
}
