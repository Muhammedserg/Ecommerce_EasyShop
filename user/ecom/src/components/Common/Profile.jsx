import React from 'react';
import { Navigate } from 'react-router-dom';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const { name, email, profilePicture } = user || {}; 

  if (!localStorage.getItem('token')) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card" style={{ width: '32rem', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
        <div className="card-body text-center" style={{ background: '#f0f0f5', padding: '2rem' }}>
          <div className="mb-4">
            <img 
              src={profilePicture || 'default-profile.png'} 
              className="rounded-circle" 
              alt="Profile" 
              style={{ width: '200px', height: '200px', objectFit: 'cover', border: '5px solid #fff', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', marginBottom: '1rem' }}
            />
          </div>
          <h2 className="mb-3" style={{ fontWeight: 'bold', color: '#4a90e2' }}>Welcome, {name}!</h2>
          <h5 className="card-title mb-2" style={{ fontWeight: 'bold', color: '#333' }}>{name}</h5>
          <p className="card-text text-muted mb-3">{email}</p>
          <div className="d-grid gap-2 d-md-block">
            <button className="btn" style={{ backgroundColor: '#4a90e2', color: 'white', border: 'none', marginRight: '10px' }}>Edit Profile</button>
            <button className="btn" style={{ backgroundColor: '#7d8ca3', color: 'white', border: 'none' }}>My Orders</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
