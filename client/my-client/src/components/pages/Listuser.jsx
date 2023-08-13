import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function UserList() {
    const user = useSelector((state) => state.getAlluser);
  return (
    <div>
      <h1>Users</h1>
      <div className='user'>
    {
      user.map(user => (
        <div key={user} className='user-in'>
     <Link to = {`/user/${user._id}`} className='user-in-2'>
      <h1>{user.name.charAt(0).toUpperCase()}</h1>
          <h5>{user.name}</h5> 
          </Link>
        </div>
      ))  
    }
    </div>
    </div>
  )
}
