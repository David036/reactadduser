import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default class FillField extends Component {
  state = {
    name: "",
    email: "",
    age: "",
    password: "",
  };

  inputName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  inputEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  inputAge = (e) => {
    this.setState({
      age: e.target.value,
    });
  };
  inputPass = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  deleteValue = () => {
    if (
      this.state.name !== "" &&
      this.state.email !== "" &&
      this.state.age !== "" &&
      this.state.password !== ""
    ) {
      this.props.butFunc(
        this.state.name,
        this.state.email,
        this.state.age,
        this.state.password
      );
      this.setState({
        name: "",
        email: "",
        age: "",
        password: "",
      });

    }else {
        alert('Empty value')
    }
  };

  render() {
    return (
      <div className="fill-section">
        <TextField
          onChange={this.inputName}
          
          id="input-name"
          label="Name"
          className="input-name"
          value={this.state.name}
        />
        <TextField
          onChange={this.inputEmail}
          
          id="input-email"
          label="Email"
          className="input-name"
          value = {this.state.email}
        />
        <TextField
          onChange={this.inputAge}
          id="input-age"
          label="Age"
          type="number"
          className="input-name"
          value={this.state.age}
        />
        <TextField
          onChange={this.inputPass}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          className="input-name"
          value = {this.state.password}
        />
        <Button className="add-btn" onClick={this.deleteValue} variant="contained">
          Add user
        </Button>
      </div>
    );
  }
}
