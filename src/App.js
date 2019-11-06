import React from "react";
import "./App.css";
import AddUser from "./components/AddUser";
import Users from "./components/UsersList";
import uuid from "uuid";
import Login from "./components/login";

class App extends React.Component {
  state = {
    users: [
      {
        id: "1",
        firstName: "fahim",
        lastName: "ahmadi",
        dateofbirth: "10-09-1985",
        gender: "male"
      },
      {
        id: "2",
        firstName: "fahim",
        lastName: "ahmadi",
        dateofbirth: "10-08-1985",
        gender: "male"
      }
    ]
  };

  addUser = stateObj => {
    const newUser = {
      firstName: stateObj.fname,
      lastName: stateObj.lname,
      dateofbirth: stateObj.dob,
      gender: stateObj.gender,
      id: uuid.v4()
    };
    //console.log(newUser);
    this.state.users.push(newUser);
    //this.setState({ users: [...this.state.users, newUser] });
    this.forceUpdate();
    console.log("State:");
    console.log(this.state);
  };

  //delete users
  deleteUser = uid => {
    const users = this.state.users.filter(user => user.id !== uid);
    this.setState({ users });

    /* second approach to delete users
    delete this.state.users[uid];
    this.forceUpdate(); */
  };

  //login check
  checkUser = userInfo => {
    var userExist = false;
    this.state.users.map(user =>
      userInfo.firstName === user.firstName &&
      userInfo.lastName === user.lastName
        ? (userExist = true)
        : null
    );

    userExist
      ? console.log("Welcome to our website")
      : console.log("Sorry you should register yourself first!");
  };

  render() {
    return (
      <div className="App row">
        <h3 className="welcome col-md-10 container">Registration Form</h3>
        <AddUser add={this.addUser} />
        <table className="table table-striped container mt-5 rounded-top-lg border border-info col-md-10">
          <thead className="bg-secondary text-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Date of Birth</th>
              <th scope="col">Gender</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <Users user={this.state.users} del={this.deleteUser} />
          </tbody>
        </table>
        <Login loginCheck={this.checkUser} />
      </div>
    );
  }
}

export default App;
