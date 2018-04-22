import React, { Component } from "react";
import axios from "axios";

//import './GetUser.css';

class GetUser extends Component {
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
  }

  componentDidMount() {
    console.log("this.props.id: ", this.props.id);
    axios
      .get(`/api/users/${this.props.id}`)
      .then(({ data }) => this.setState({ user: data }))
      .catch(console.log);
  }

  render() {
    return (
      <div>
        <ul className="user_list">
          <li> first_name: {this.state.user.first_name} </li>
          <li> last_name: {this.state.user.last_name} </li>
          <li> address: {this.state.user.address} </li>
          <li> city: {this.state.user.city} </li>
          <li> state: {this.state.user.state} </li>
          <li> zipcode: {this.state.user.zipcode} </li>
        </ul>
      </div>
    );
  }
}
export default GetUser;
