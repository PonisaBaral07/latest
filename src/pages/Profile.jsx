import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const Profile = () => {
    const {user}=useAuth0();
    console.log(user);
  return (
    <div>
        <img src={user.picture} alt={user.name} />
        <p>{user.email}</p>
        <h2>{user.name}</h2>
    </div>
  )
}

export default Profile;