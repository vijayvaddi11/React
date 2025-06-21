import React, { useContext } from 'react'
import UserContext from '../context/UserContext.js'

function Profile() {
  const {user}= useContext(UserContext)
  
  if (!user) return <div><br/>please login !</div>
  
  return <div> <br/> welcome {user.username} !</div>;
}

export default Profile
