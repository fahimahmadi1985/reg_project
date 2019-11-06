import React, { Component } from "react";

export class AddUser extends Component {
  state = {
    fname: "",
    lname: "",
    dob: "",
    gender: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({
      fname: "",
      lname: "",
      dob: "",
      gender: ""
    });
  };

  /* handleFN = e => {
      this.setState({ fname: e.target.value });
      console.log(this.state);
    };
  
    handleLN = e => {
      this.setState({ lname: e.target.value });
      console.log(this.state);
    };
    handleDOB = e => {
      this.setState({ dob: e.target.value });
      console.log(this.state);
    };
    handleGender = e => {
      this.setState({ gender: e.target.value });
      console.log(this.state);
    }; */

  //second approach : using single handle method instead of multiple handle methods
  handleFormChanges = e => {
    const formElem = e.target.name;
    const elemValue = e.target.value;
    this.setState({
      [formElem]: elemValue
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="regCont container bg-light rounded-top p-4 col-md-10">
        <form onSubmit={this.onSubmit}>
          <div className="form-inline row form-group pr-3">
            <label className="col-md-2">FirstName:</label>
            <input
              type="text"
              name="fname"
              id="fn"
              className="col-md-4 form-control"
              value={this.state.fname}
              onChange={this.handleFormChanges}
            />
            <label className="col-md-2">LastName:</label>
            <input
              type="text"
              name="lname"
              id="ln"
              className="col-md-4 form-control"
              value={this.state.lname}
              onChange={this.handleFormChanges}
            />
          </div>
          <div className="form-inline row form-group">
            <label className="col-md-2">DateOfBirth:</label>
            <input
              type="Date"
              name="dob"
              id="dob"
              className="col-md-4 form-control"
              value={this.state.dob}
              onChange={this.handleFormChanges}
            />
            <label className="col-md-2">Gender:</label> Male
            <input
              type="radio"
              name="gender"
              id="gender"
              value="male"
              className="ml-1 form-control"
              onClick={this.handleFormChanges}
            />
            <label className="ml-5">Female</label>
            <input
              type="radio"
              name="gender"
              id="gender"
              value="female"
              className="ml-1 form-control"
              onClick={this.handleFormChanges}
            />
          </div>
          <center>
            <input
              type="submit"
              value="Register"
              className="btn btn-outline-dark btn-light mb-3 mt-4 form-control"
            />
          </center>
        </form>
      </div>
    );
  }
}

export default AddUser;
