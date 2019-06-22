import React, { Component } from 'react';
import Report from './report.js'
import Modal from './modal/modal';
import AddContact from './AddContact.js'

import './App.css';

class App extends Component {
  state = {
    showModal: false
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  }
  
render() {
    return (
      <div className="App">
        <div>
        <h1>Helpdesk Contacts</h1>
          <Report />
        </div>
        <button className="modal_opener" onClick={this.toggleModal}>
          Add Contact
        </button>
        
        <Modal
          show={this.state.showModal}
          closeCallback={this.toggleModal}
          customClass="custom_modal_class">
          <React.Fragment>
            <AddContact />
          </React.Fragment>
        </Modal>
      </div>
    );
  }
}

export default App;