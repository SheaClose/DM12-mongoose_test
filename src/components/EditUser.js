import React, { Component } from "react";
import axios from "axios";
import { TextField, RaisedButton } from "material-ui";

//import './EditUser.css';

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        first_name: "",
        last_name: "",
        address: "",
        city: "",
        state: "",
        zipcode: ""
      }
    };
    this.updateUser = this.updateUser.bind(this);
    this.submitUser = this.submitUser.bind(this);
  }

  componentDidMount() {
    axios
      .get(`/api/users/${this.props.id}`)
      .then(({ data }) => this.setState({ user: data }))
      .catch(console.log);
  }
  updateUser(prop, val) {
    this.setState({ user: { ...this.state.user, [prop]: val } });
  }

  submitUser(e) {
    e.preventDefault();
    axios
      .put(`/api/users/${this.props.id}`, this.state.user)
      .then(({ data }) => {
        console.log(data);
      })
      .catch(console.log);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitUser}>
          <ul className="user_list">
            <li>
              first_name:
              <TextField
                className="text_field"
                floatingLabelText="first_name"
                onChange={e => this.updateUser("first_name", e.target.value)}
                value={this.state.user.first_name}
              />
            </li>
            <li>
              last_name:
              <TextField
                className="text_field"
                floatingLabelText="last_name"
                onChange={e => this.updateUser("last_name", e.target.value)}
                value={this.state.user.last_name}
              />
            </li>
            <li>
              address:
              <TextField
                className="text_field"
                floatingLabelText="address"
                onChange={e => this.updateUser("address", e.target.value)}
                value={this.state.user.address}
              />
            </li>
            <li>
              city:
              <TextField
                className="text_field"
                floatingLabelText="city"
                onChange={e => this.updateUser("city", e.target.value)}
                value={this.state.user.city}
              />
            </li>
            <li>
              state:
              <TextField
                className="text_field"
                floatingLabelText="state"
                onChange={e => this.updateUser("state", e.target.value)}
                value={this.state.user.state}
              />
            </li>
            <li>
              zipcode:
              <TextField
                className="text_field"
                floatingLabelText="zipcode"
                onChange={e => this.updateUser("zipcode", e.target.value)}
                value={this.state.user.zipcode}
              />
            </li>
          </ul>
          <RaisedButton label="Submit" type="submit" />
        </form>
      </div>
    );
  }
}
export default EditUser;
