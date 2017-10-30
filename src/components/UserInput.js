import React, { Component } from "react";

class UserInput extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      hometown: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addUser = event => {
    event.preventDefault();
    this.props.store.dispatch({
      type: "ADD_USER",
      user: { username: this.state.username, hometown: this.state.hometown }
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addUser}>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="hometown"
            value={this.state.hometown}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default UserInput;
