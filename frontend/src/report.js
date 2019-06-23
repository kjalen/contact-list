import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const classes = makeStyles(theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
  }));
  
class Report extends Component {
    state = {
        contacts: []       
    }

    componentDidMount() {
        fetch('/api/report')
        .then(response => response.json()
        .then(data => this.setState({ contacts: data.data })))
    }

    render() {
        return (
            <Paper className={classes.root}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Edit</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.contacts.map(row => (
                    <TableRow key={row.id}>
                      <TableCell>Edit Button</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.role}</TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell>{(row.Numbers[0]) ? row.Numbers[0].number : ''}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
        )
    }
}
export default Report;