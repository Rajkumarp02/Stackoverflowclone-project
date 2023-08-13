import React from 'react'
import Widget from './Widget'
import Tags from './Tags'
import './Rightside.css'
export default function RightSidebar() {
  return (
    <aside className='Right-side'> 
    <Widget/>
    <Tags/>
    </aside>
  )
}
