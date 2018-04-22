import React, { Component } from "react";
import axios from "axios";

import AddUser from "./components/AddUser";
import GetUser from "./components/GetUser";
import EditUser from "./components/EditUser";
import DeleteUser from "./components/DeleteUser";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      addUser: true,
      getUser: false,
      editUser: false,
      deleteUser: false,
      user: {
        first_name: "",
        last_name: "",
        address: "",
        city: "",
        state: "",
        zipcode: ""
      }
    };
    this.submitForm = this.submitForm.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  changeState(prop) {
    let reset = {
      addUser: false,
      getUser: false,
      editUser: false,
      deleteUser: false
    };
    this.setState({ ...reset, [prop]: true });
  }

  submitForm(e) {
    e.preventDefault();
    axios
      .post("/api/users", this.state.user)
      .then(res => {
        console.log(res);
        this.setState({ id: res.data._id });
      })
      .catch(console.log);
  }

  updateUser(prop, val) {
    this.setState({ user: { ...this.state.user, [prop]: val } });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Intro to MongoDb</h1>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <span onClick={() => this.changeState("addUser")}>Add User</span>
            <span onClick={() => this.changeState("getUser")}>Get User</span>
            <span onClick={() => this.changeState("editUser")}>Edit User</span>
            <span onClick={() => this.changeState("deleteUser")}>
              Delete User
            </span>
          </div>
        </header>
        {this.state.addUser && (
          <AddUser submitForm={this.submitForm} updateUser={this.updateUser} />
        )}
        {this.state.getUser && <GetUser id={this.state.id} />}
        {this.state.editUser && <EditUser id={this.state.id} />}
        {this.state.deleteUser && <DeleteUser id={this.state.id} />}
      </div>
    );
  }
}

export default App;
