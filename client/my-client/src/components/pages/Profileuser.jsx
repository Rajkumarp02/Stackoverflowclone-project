import React from 'react'
import { useSelector } from 'react-redux';
import LeftSidebar from '../sidebar/LeftSidebar';
import { useParams } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import moment from 'moment';
import { useState } from 'react';
import EditProfile from './EditProfile';
import Profilebio from './Profilebio';
export default function UserProfile() {
const {id} = useParams()
const user2 = useSelector((state) => state.getAlluser);
const UserProfile = user2.filter(user => user._id === id)[0]
const user = useSelector((state) => state.currentuserReducer);

const [Switch,setSwitch] = useState(false);

console.log(UserProfile)
 return (
    <div className='Tag-sidebar-1'>
      <LeftSidebar/>
      <div className='Tag-sidebar-3'>

       <div>
          <Avatar backgroundColor='purple' color='white' borderRadius='1px' px='33px' py='27px' textDecoration='none' width='10px'>
          {UserProfile?.name.charAt(0).toUpperCase()}
          </Avatar>
          <div className='Top-get-user'>
            <h1>{UserProfile.name}</h1>
            <p><i class="fa-solid fa-cake-candles"></i>Member for { moment(UserProfile.joinedon).fromNow()}</p>
          </div>
       </div>
       {
        user?.result._id === id && (
          <>
          <button type='button' className='edit-profile' onClick={() => setSwitch(true)}>Edit profile</button>
          </>
        )
       }
      
       {
      Switch? (
        <EditProfile user={user} setSwitch={setSwitch} />
      ):(
        <Profilebio UserProfile = {UserProfile}/>
      )
       }
      </div>
    </div>
  )
}
