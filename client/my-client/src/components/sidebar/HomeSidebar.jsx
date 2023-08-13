import React from 'react'
import {  useLocation, useNavigate } from 'react-router-dom'
import QuestionList from './QuestionList';
import { useSelector } from 'react-redux';



export default function HomeSidebar() {

const User = useSelector((state) => state.currentuserReducer);

const location = useLocation();

const navigate = useNavigate()

const redirect = () => {

  if(User === null) {
    alert("Please do Login or signup")
    navigate('/Auth')
  }else{
    navigate('/AskQuestion')
  }
   
} 


const questionList = useSelector(data => data.question)
/* console.log(question)
  var questionList =[{
     _id:1,
     upvotes:3,
     downvotes:3,
     noOfAns:2,
     qnTitle:"what is function",
     qnBody:"is",
     qnTags:["Reactjs","react"],
     qnPosted:"raja",
     userid:1,
     qnTime:"jan1",
     answer:[{
      answerbody:"answer",
      userPosted:"kumar",
      ansTime:"jan1",
      userid:2
   }]
 }]  */


  return (


    <div className='qn'>
      <div className='qn-1'>
       
       {
        location.pathname === "/" ? <p>Top Questions</p> : <p>All Question</p>
       }
     <button onClick={redirect} className='qn-link'>Ask Question</button>
      </div>
      {
      questionList.data === null ? 
      <h4>Loading...</h4> :
      <>
      <p style={{color:"black",fontSize:"13px",marginLeft:"10px",fontWeight:"bold"}}>{questionList.data.length} Questions</p>
      {questionList.data.map((qn,i) => (
     
        <QuestionList key={i} id={qn._id} 
            votes={qn.upvotes.length - qn.downvotes.length}
            noOfAns={qn.noOfAns}
            title={qn.qnTitle}
            tags={qn.qnTags}
            qnTime={qn.askedOn}
            qnPosted={qn.userPosted}

        />
       
      ))}
      
      </>
    }
    </div>
   
  )
}
