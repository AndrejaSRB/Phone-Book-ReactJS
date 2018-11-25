import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import './Form.css'

class Form extends Component {
    state = {
        open: false,
      };
      onOpenModal = () => {
        this.setState({ open: true });
      };
    
      onCloseModal = () => {
        this.setState({ open: false });
      };
      handleSubmit = e => {
        e.preventDefault();
        this.props.contact({
          name: e.target.name.value,
          number: e.target.number.value,
          email: e.target.email.value,
          address: e.target.address.value,
        })
      }
      handleChange = e => {
        e.preventDefault();
      }
      render() {
        const { open } = this.state;
        return (
          <div>
            <button className="add-contact" onClick={this.onOpenModal}>New Contact</button>
            <Modal open={open} onClose={this.onCloseModal}>
            <h4>Add new contact</h4>
              <form onSubmit={(e) => this.handleSubmit(e)}>
                  <div className="form-item">
                    <span>Name</span>
                    <input 
                    type="text" 
                    name="name" 
                    placeholder="Enter Name..." 
                    onChange={this.handleChange} 
                    />
                  </div>
                  <div className="form-item">
                    <span>Contact Number</span>
                    <input 
                    type="text" 
                    name="number" 
                    placeholder="Enter Contact Number..." 
                    onChange={this.handleChange} 
                    />
                  </div>
                  <div className="form-item">
                    <span>Email</span>
                    <input 
                    type="text" 
                    name="email" 
                    placeholder="Enter Email..." 
                    onChange={this.handleChange} 
                    />
                  </div>
                  <div className="form-item">
                    <span>Home Address</span>
                    <input 
                    type="text" 
                    name="address" 
                    placeholder="Home Address..." 
                    onChange={this.handleChange} 
                    />
                  </div>
                  <button className="add-contact" onClick={this.onCloseModal}>Add Contact</button>
              </form>
            </Modal>
          </div>
        );
      }
    }
 
export default Form;