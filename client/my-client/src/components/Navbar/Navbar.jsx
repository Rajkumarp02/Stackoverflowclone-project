import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assests/logo.png'
import Avatar from '../../components/Avatar/Avatar'
import './Navbar.css'
import { useDispatch, useSelector }  from 'react-redux'
import { currentuser } from '../actions/currentuser'
import decode from 'jwt-decode'
export default function Navbar() {

  const user = useSelector((state) => state.currentuserReducer);

   const dispatch =  useDispatch();
   const navigate = useNavigate();

   useEffect(() => {
    const token = user?.token
    if(token) {
      const decode = decode(token)
      if(decode.exp * 1000 < new Date().getTime()){
         handleLogout()
      }
    }
    dispatch(currentuser(JSON.parse(localStorage.getItem('profile'))))
   
   },[dispatch])

   const handleLogout = () => {
     dispatch({type: "LOGOUT"});
     navigate('/')
     dispatch(currentuser(null))
   }

  


  return (
       <div class='nav'>
        <div class='navbar'>
        <Link to='/' class='nav-item'>
          <img class='logo' src={logo} alt='logo'/>
        Stack<span class='logoname'>Overflow</span>
        </Link>
        <Link to='/about' class='nav-item nav-btn'>
         About
        </Link>
        <Link to='/product' class='nav-item nav-btn'>
         Products
        </Link>
        <Link to='/forteam' class='nav-item nav-btn'>
         For Teams
        </Link>
        <form>
          <input type='search' name='search' placeholder='Search...'/>
          <i class="fa-solid fa-magnifying-glass search"></i>
        </form>
       {user === null ? <Link to='/Auth' class='signin'>
       Log in
        </Link> : 
        <>
        <button class='signin' onClick={handleLogout}>Logout</button>
        <Link to={`/user/${user?.result?._id}`} style={{color:"white" ,textDecoration : "none"}}>
        <Avatar backgroundColor='rgb(20, 194, 194)' color='white' borderRadius='40px' px='13px' py='7px' textDecoration='none'> {user.result.name.charAt(0).toUpperCase()}</Avatar>
        </Link>
        </>
      }
    </div>
    </div>
  )
}
