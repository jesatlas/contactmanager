import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contact
            name="jesse rothstein"
            phone="555-555-5555"
            email="jesatlas@gmail.com"
          />
          <Contact
            name="karen smith"
            phone="222-222-2222"
            email="karsmith@gmail.com"
          />
        </div>
      </div>
    );
  }
}

export default App;
