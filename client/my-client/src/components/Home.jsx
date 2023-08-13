import React from 'react'
import LeftSidebar from './sidebar/LeftSidebar'
import RightSidebar from './sidebar/RightSidebar'
import HomeSidebar from './sidebar/HomeSidebar'

export default function Home() {
  return (
      <>
     
     <div class='sidebar-3'>
    <HomeSidebar/>
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
