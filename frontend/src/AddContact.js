import React from 'react';
import Container from '@material-ui/core/Container'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';


const classes = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

class AddContact extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {name: '', email: '', role: '', phone: [], phone_type: []};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitContact = this.handleSubmitContact.bind(this);
  }

  handleChange(event) {
    console.log(event);
    console.log(event.target);
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }



  handleSubmitContact(event) {
    fetch('/api/names', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify( {
        'name': this.state.name,
        'email': this.state.email,
        'role': this.state.role
      })
    }).then(response => response.json())
    .then(data => console.log(JSON.stringify( {
        'name': this.state.name,
        'email': this.state.email,
        'role': this.state.role
      })));


    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form className={classes.container} onSubmit={this.handleSubmitContact}>
          <TextField name="name" label="Name" className={classes.textField} onChange={this.handleChange} value={this.state.name}/>
          <TextField name="email" label="Email" className={classes.email} onChange={this.handleChange} value={this.state.email} />
          <TextField name="phone" label="Phone" className={classes.phone} onChange={this.handleChange} value={this.state.phone} />
          <TextField name="role" label="Role" className={classes.role} onChange={this.handleChange} value={this.state.role} />
          <Button variant="contained" color="primary" className={classes.button} value="Submit" type="submit">
        Submit
      </Button>
        </form>
        
        <form className={classes.container}  onSubmit={this.handleNumbersSubmit}>
          <TextField label="Number" className={classes.number}/>
          <TextField label="Type" className={classes.phone_type}/>
          <Button className={classes.button}>Add</Button>
       </form>
      </div>
    );
  }
}
export default AddContact;