import React, { Component } from "react";

export class Users extends Component {
  /*   deleteU = e => {
    e.preventDefault();
    const userId = e.target.id;
    this.props.del(userId);
  }; */
  render() {
    console.log(this.props);
    return this.props.user.map((u, index) => (
      <tr key={u.id} scop="row">
        <td>
          <center>{index + 1}</center>
        </td>
        <td>{u.firstName}</td>
        <td>{u.lastName}</td>
        <td>{u.dateofbirth}</td>
        <td>{u.gender}</td>
        <td>
          <button
            className="btn btn-danger btn-xsm del-btn"
            /* onClick={this.deleteU} */
            onClick={e => {
              this.props.del(e.target.id);
            }}
            id={u.id}
          >
            x
          </button>
        </td>
      </tr>
    ));
  }
}

export default Users;
