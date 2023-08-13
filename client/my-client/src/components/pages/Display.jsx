import React from 'react'
import LeftSidebar from '../sidebar/LeftSidebar'
import RightSidebar from '../sidebar/RightSidebar'
import DisplayAns from '../sidebar/DisplayAns'

export default function Display() {
  return (
    <>

    
     
     <div class='sidebar-3'>
     <DisplayAns/>
      </div>  
     <div class='sidebar-1'>
     <LeftSidebar />
      <div class="sidebar-2">
       <RightSidebar/>
       </div>
       </div>
       
     </>
       
   
      
      
  )
}
