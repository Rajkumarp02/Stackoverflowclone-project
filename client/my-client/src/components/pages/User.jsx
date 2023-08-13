import React from 'react'
import {useLocation} from 'react-router-dom'
import LeftSidebar from '../sidebar/LeftSidebar'
import UserList from './Listuser'

const User = () => {
    const location = useLocation()
  return (
    <div className='Tag-sidebar-1'>
      <LeftSidebar/>
      <div className='Tag-sidebar-3'>
       {
        location.pathname === '/user' ?
      
         <UserList />
        
        :
        <h1>hello!</h1>
       
         }
      </div>
    </div>
  )
}

export default User
