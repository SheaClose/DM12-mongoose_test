import React from "react";
import { TextField, RaisedButton } from "material-ui";

export default function AddUser(props) {
  return (
    <div className="">
      <form onSubmit={props.submitForm}>
        <div className="form">
          <TextField
            style={{ width: "30vw" }}
            onChange={e => props.updateUser("first_name", e.target.value)}
            type="text"
            floatingLabelText="first_name"
          />
          <TextField
            style={{ width: "30vw" }}
            onChange={e => props.updateUser("last_name", e.target.value)}
            type="text"
            floatingLabelText="last_name"
          />
          <TextField
            style={{ width: "30vw" }}
            onChange={e => props.updateUser("address", e.target.value)}
            type="text"
            floatingLabelText="address"
          />
          <TextField
            style={{ width: "30vw" }}
            onChange={e => props.updateUser("city", e.target.value)}
            type="text"
            floatingLabelText="city"
          />
          <TextField
            style={{ width: "30vw" }}
            onChange={e => props.updateUser("state", e.target.value)}
            type="text"
            floatingLabelText="state"
          />
          <TextField
            style={{ width: "30vw" }}
            onChange={e => props.updateUser("zipcode", e.target.value)}
            type="text"
            floatingLabelText="zipcode"
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <RaisedButton type="submit" label="Submit" />
        </div>
      </form>
    </div>
  );
}
