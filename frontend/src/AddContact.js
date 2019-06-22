import React from 'react';
class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', email: '', phone: '', role: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }



  handleSubmit(event) {
    

    fetch('/api/names', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify( {
        'name': this.state.name,
        'email': this.state.email,
        'phone': this.state.phone,
        'role': this.state.role
      })
    }).then(response => response.json())
    .then(data => console.log(JSON.stringify( {
        'name': this.state.name,
        'email': this.state.email,
        'phone': this.state.phone,
        'role': this.state.role
      })));


    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          Email:
          <input name="email" type="email" value={this.state.email} onChange={this.handleChange} />
        </label>
        <label>
          Phone:
          <input name="phone" type="tel" value={this.state.phone} onChange={this.handleChange} />
        </label>
        <label>
          Role:
          <input name="role" type="text" value={this.state.role} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default AddContact;