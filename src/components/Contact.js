import React, { Component } from 'react';

import { Consumer } from '../context';

class Contact extends Component {
  state = {
    showDetails: false
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({ type: 'DELETE_CONTACT', payload: id });
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{' '}
                <i
                  onClick={() =>
                    this.setState({ showDetails: !this.state.showDetails })
                  }
                  className={
                    this.state.showDetails ? 'fas fa-minus' : 'fas fa-plus'
                  }
                  style={{ cursor: 'pointer' }}
                />
                <i
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
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
        }}
      </Consumer>
    );
  }
}

export default Contact;
