import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card card-body mb-3">
        <h4>{name}</h4>
        <ul className="list-group">
          <li className="list-group-item">email: {email}</li>
          <li className="list-group-item">phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

export default Contact;
