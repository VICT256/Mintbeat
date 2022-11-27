import React from 'react'
import Dashboard from '../components/profile/Dashboard';
import styles from  '../components/profile/profile.css';

function Profile() {
    
  return (
    <div className={styles.background}>
         <Dashboard />
    </div>
  );
}

export default Profile;

