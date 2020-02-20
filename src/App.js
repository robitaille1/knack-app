import React, { Component } from 'react';
import CustomerSearch from './components/CustomerSearch/CustomerSearch'
import Results from './components/Results/Results'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: []
    };
  }

 searchHandler = (event) => {
    event.preventDefault();
    const name = event.target['query'].value
    const searchTerm = name.charAt(0).toUpperCase() + name.slice(1)
    fetch('https://api.knack.com/v1/pages/scene_1/views/view_2/records', {
      method: 'GET',
      headers: {
        "content-type": "application/json",
        "X-Knack-Application-Id": "5e48177375f2a10016f1b2e0",
        "X-Knack-REST-API-KEY":"36da45a0-500e-11ea-bec3-f3ac19c53a54"
      },
    })
      .then(response => {
        return Promise.all([response.json()]);
      })
      .then((records) => {
        const customers = records[0].records.filter(record => record.field_1_raw.last.includes(searchTerm));
        this.setState({customers});
      })
 };

  render(){
    return (
      <main className='App'>
        <CustomerSearch search={this.searchHandler} query={this.searchQuery} />
        <Results customers={this.state.customers}/>
      </main>
    );
  };
}

export default App;
