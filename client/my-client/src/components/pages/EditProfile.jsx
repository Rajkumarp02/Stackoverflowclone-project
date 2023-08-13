import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { updateUser } from '../actions/user'


export default function EditProfile({user , setSwitch}) {
    const [name,setName] = useState(user?.result?.name)
    const [about,setAbout] = useState(user?.result?.about)
    const [tags,setTags] = useState([])
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log({name,about})
    if(tags.length === 0){
      dispatch(updateUser(user?.result?._id,{name,about,tags:user?.tags}))
    }else{
      dispatch(updateUser(user?.result?._id,{name,about,tags}))
    }
    setSwitch(false);
     }
  return (
    <div>
      <div  className='Edit'>
        <h1>
            Edit your profile
        </h1>
        <h2>
            Public information
        </h2>
        <form onSubmit={handleSubmit}>
          <div className='design-form'>
            <h3>Display Name</h3>
            <input type='text' value={name}  onChange={(e) => setName(e.target.value)}/>
            <h3>About</h3>
            <input type='text' value={about}  onChange={(e) => setAbout(e.target.value)}/>
             <h3>Watched tags</h3>
             <p>Add tags sperated by 1 space</p>
             <input type='text' id='tags' onChange={(e) => setTags(e.target.value.split(' '))}/> <br/> <br/> 
             <input type='submit' value='Save Profile'  className='b-t-n' />
             <button type='button' className='b-t-n-2' onClick={() => setSwitch(false)} >cancel</button>
             </div>
        </form>
      </div>

    </div>
  )
}
