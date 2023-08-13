import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'
export default function QuestionList(props) {
  return (
    <>
    <div className='ans-container'>
    <div className='votes'>
      <p style={{fontSize:"20px"}}>{props.votes}</p>
      <p>votes</p>
    </div>
    <div className='answer'>
      <p style={{fontSize:"20px"}}>{props.noOfAns}</p>
      <p>answers</p>
    </div>
     <div className='ask'>
    <Link to={`/Question/${props.id}`} className='link-qn'>{props.title}</Link>
    <div className='names-tag'>
       {
        props.tags.map((tag) =>(
          <p key={tag}>{tag}</p>
        ))
       }
     </div>
     </div>
     <div className='asked'>
     <p>Asked {moment(props.qnTime).fromNow()} {props.qnPosted}</p>
  
     </div>   
    </div>
    </>
  )
}
