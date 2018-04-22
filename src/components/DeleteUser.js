import React, { Component } from "react";
import { RaisedButton, Snackbar } from "material-ui";
import axios from "axios";
//import './DeleteUser.css';

class DeleteUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      open: false
    };
    this.deleteUser = this.deleteUser.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  deleteUser() {
    axios
      .delete(`/api/users/${this.props.id}`)
      .then(res =>
        this.setState({ message: "User successfully Deleted!!!", open: true })
      )
      .catch(err =>
        this.setState({ message: "Error deleting User", open: true })
      );
  }

  handleRequestClose() {
    this.setState({
      open: false
    });
  }

  render() {
    return (
      <div className="">
        <RaisedButton onClick={this.deleteUser} label="DeleteUser" />
        <Snackbar
          open={this.state.open}
          message={this.state.message}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}
export default DeleteUser;
