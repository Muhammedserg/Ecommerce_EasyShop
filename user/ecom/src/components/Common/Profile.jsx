import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class Profile extends Component {
  render() {
    const user = JSON.parse(localStorage.getItem('user'));
    const { name, email } = user || {};

    if (!localStorage.getItem('token')) {
      return <Navigate to="/login" />
    }

    return (
      <div>
        <h1>User Profile Page</h1>
        <ul className="list-group">
          <li className="list-group-item">Name: {name}</li>
          <li className="list-group-item">Email: {email}</li>
        </ul>
      </div>
    );
  }
}

export default Profile;
