import React from 'react'
import { NavLink} from "react-router-dom"
import './Leftside.css'
export default function LeftSidebar() {
  return (
    <div class="left-side">
      <div class="side-nav">
      <div class="first">
      <NavLink to="/" className="side-link" activeClass='active' style={{textDecoration:"none", color: "rgba(85, 83, 83, 0.993)"
   }}>
         Home
       </NavLink>
       <p>Public</p></div>
       <div class="second">
       <NavLink to="/Question" className="side-link" activeClass='active' style={{textDecoration:"none", color: "rgba(85, 83, 83, 0.993)"
   }}> 
        <i class="fa-solid fa-earth-americas">
        Questions
        </i>
      
       </NavLink>

       <NavLink to="/tags" className="side-link" activeClass='active' style={{textDecoration:"none", color: "rgba(85, 83, 83, 0.993)",padding:"10px 0px"
   }}>
         Tags
       </NavLink>
       <NavLink to="/user" className="side-link" activeClass='active' style={{textDecoration:"none", color: "rgba(85, 83, 83, 0.993)"
   }}>
         Users
       </NavLink>
       </div>
      </div>
    </div>
  )
}
