import React, { Component } from 'react';

import { Consumer } from '../context';

class Contact extends Component {
  state = {
    showDetails: false
  };

  render() {
    const { name, email, phone } = this.props.contact;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{' '}
          <i
            onClick={() =>
              this.setState({ showDetails: !this.state.showDetails })
            }
            className={this.state.showDetails ? 'fas fa-minus' : 'fas fa-plus'}
            style={{ cursor: 'pointer' }}
          />
          <i
            onClick={() => {
              console.log('delete button');
            }}
            className="fas fa-times"
            style={{ cursor: 'pointer', float: 'right', color: 'red' }}
          />
        </h4>
        {this.state.showDetails ? (
          <ul className="list-group">
            <li className="list-group-item">email: {email}</li>
            <li className="list-group-item">phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Contact;
