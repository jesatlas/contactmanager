import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup'

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state

    // Check Errors
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } })
      return;
    }
    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } })
      return;
    }
    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is required' } })
      return;
    }

    const newContact = { id: uuid(), name, email, phone }
    dispatch({ type: 'ADD_CONTACT', payload: newContact })
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { name, email, phone, errors } = this.state
    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    value={name}
                    placeholder="Enter Name..."
                    type="text"
                    error={errors.name}
                    changer={this.onChange}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    value={email}
                    placeholder="Enter Email..."
                    type="text"
                    error={errors.email}
                    changer={this.onChange}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    value={phone}
                    placeholder="Enter Phone..."
                    type="text"
                    error={errors.phone}
                    changer={this.onChange}
                  />
                  <input type="submit" value="Add Contact" className="btn btn-light btn-block" />
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    );
  }
}

export default AddContact;
