import React from 'react'

export default function Tags() {

    const tags = ["c" ,'c++','Reactjs','Express','node','json','html','css','js']
  return (
    <div className='tags'>
      <h3>Related Tags</h3>
      <div className='name-tag'>
       {
        tags.map((tag) => (
            <>
            <p key={tag}>{tag}</p>
           
            </>
        ))
       }
        <h5 style={{color:"skyblue"}}>more related tags</h5>
      </div>
    </div>
  )
}
