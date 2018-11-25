import React, { Component } from 'react';
import './App.css';
import From from './components/Form/Form';

class App extends Component {
  state = {
    contacts: [],
    search: ""
  };
  renderTable = () => {
      return this.state.contacts.map((contact, index) =>
    <tr key={index}>
      <td>{contact.name}</td>
      <td>{contact.number}</td>
      <td>{contact.email}</td>
      <td>{contact.address}</td>
      <td>
        <button className="action-button" onClick={() => this.handleDelete(index)}>Delete</button>
      </td>
    </tr>
    )
  };
  handleDelete = index => {
    let contacts = [...this.state.contacts];
    contacts.splice(index,1);
    this.setState({contacts})     
  };
  allContacts = contact => {
    let contacts = [...this.state.contacts, contact];
    this.setState({contacts})
  };
  render() {
    return (
      <div className="app">
        <div className="container">
          <From
            contacts={this.state.contacts}
            contact={(e) => this.allContacts(e)}
          />
          <table className="table">
            <tbody>
              <tr>
                <th>Name</th>
                <th>Number</th>
                <th>Email</th>
                <th>Adress</th>
                <th>Action</th>
              </tr>
              {this.renderTable()}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
}

export default App;
