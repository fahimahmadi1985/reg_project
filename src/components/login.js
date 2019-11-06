import React, { Component } from "react";

export class Login extends Component {
  state = {
    firstName: "",
    lastName: ""
  };
  handleForm = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitLogin = e => {
    e.preventDefault();
    this.props.loginCheck(this.state);
  };
  render() {
    return (
      <div className="bg-light rounded-top border border-warning p-4 col-md-10 container mt-4">
        <form onSubmit={this.submitLogin}>
          <div className="form-group">
            <label>FirstName:</label>
            <input
              type="text"
              name="firstName"
              onChange={this.handleForm}
              className="form-control"
            />
            <label className="mt-3">LastName:</label>
            <input
              type="text"
              name="lastName"
              onChange={this.handleForm}
              className="form-control"
            />
            <input
              type="submit"
              value="Login"
              className=" mt-4 form-control btn-outline-dark"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
