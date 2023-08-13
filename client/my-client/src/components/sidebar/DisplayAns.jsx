import React, { useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import  logo from '../../assests/circle-down-solid.svg'
import  logo2 from '../../assests/circle-up-solid.svg'
import Avatar from '../Avatar/Avatar'
import '../pages/Display.css'
import { deleteQuestion, postAnswer , deleteAnswer,voteQuestion } from '../actions/question'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import copy from 'copy-to-clipboard'

export default function DisplayAns() {

     const {id} = useParams()
    
    const questionList = useSelector(data => data.question)
   

    const [Answer, setAnswer] = useState("");
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const User = useSelector((state) => state.currentuserReducer);
    const location = useLocation();
    const url = 'http://localhost:3000';

    const handlePostAns = (e, answerLength) => {
      e.preventDefault();
    
      if (User === null) {
        alert("Login or Signup to answer a question");
        Navigate("/auth");
      } else {
        if (Answer === "") {
          alert("Enter an answer before submitting");
        } else {
          dispatch(
            postAnswer({
              id,
              noOfAns: answerLength + 1,
              answerBody: Answer,
              userAnswer: User.result.name,
            })
          );
          setAnswer("");
          console.log(123)
        }
      }
    };



    const handleDelete = (id) =>{
      dispatch(deleteQuestion(id,Navigate))
    }
  
   
    const handleShare = () => {
      copy(url + location.pathname);
      alert("Copied url : " + url + location.pathname);
      alert("hi")
    };

     const deleteCall = (answerId,noOfAns ) => {
      dispatch(deleteAnswer(id,answerId,noOfAns -1))
    } 
    
    const handleUpVote = () => {
      if (User === null) {
        alert("Login or Signup to up vote a question");
        Navigate("/auth");
      } else {
        dispatch(voteQuestion(id, "upVote"));
      }
    };
  
    const handleDownVote = () => {
      if (User === null) {
        alert("Login or Signup to down vote a question");
        Navigate("/auth");
      } else {
        dispatch(voteQuestion(id, "downVote"));
      }
    };

  return (
    
    <>
      <div className='view-ans'>
        {
            questionList === null?
            <h1>Loading...</h1>
            :
            <>
            {questionList.data?.filter((ans) => ans._id === id).map((ans)=> (
                <div key={ans._id}>
                <div className='view-container'>
                <h1>{ans.qnTitle}</h1>


                <div className='view-container2'>

                 <div className='vote'>
                 <img src={logo2} alt='' class='logo2' onClick={() =>handleUpVote()} />
                 <p style={{marginLeft:"5px"}}>{ans.upvotes.length - ans.downvotes.length}</p> 
                 <img src={logo} alt='' class='logo2' onClick={handleDownVote} /> 
                 </div>


                 <div className='view-body'>
                  <p>{ans.qnBody}</p>
                  <div className='names-tag'>
                    
                {
                 ans.qnTags.map((tag) =>(
                 <p key={tag}>{tag}</p>
                 ))
                 } 
                
              
                  
                  </div>
                   

                  <div className='btn-sp'>

                     
                  <button type='button' className='btn-1' onClick={()=> handleShare()}>share</button>

                  { 
                    User?.result?._id === ans?.userId &&(
                     <button type='button' className='btn-1'onClick={ ()=> handleDelete(ans._id)}>delete</button>
                  )}   
                    
                    </div>
                  </div>
                  </div>
                
                 <div className='view-user'>
                    
                        <div>
                        <p>asked {moment(ans.askedOn).fromNow()}</p>
                        </div>
                        
                        <div>

                   <Link to={`/user/${ans.userId}`} style={{color:"black" ,textDecoration : "none" }}>
                      <div className='view-user-bio'>     
                    <Avatar backgroundColor='rgb(20, 194, 194)' color='white' borderRadius='40px' px='13px' py='7px' width='10px'>
                            {ans.userPosted.charAt(0).toUpperCase()} 
                    </Avatar>
                    <h1>{ans.userPosted}</h1>
                    </div>
                     </Link>
                </div> 
                      </div>
               
                        </div>

                    {
                        ans.noOfAns !== 0 && (
                            <>
                            <h4>{ans.noOfAns}Answers</h4>
                            {
                              ans.answer.map((answer) => (
                                <>
                                <p>Answer by {answer.userAnswer}</p>
                                <h5>{answer.answerBody}</h5>
                              
                            <button type='button' className='btn-1' onClick={handleShare}>share</button>
                            
                             <button type='button' className='btn-1' onClick={() =>deleteCall(answer._id,ans.noOfAns)}>delete</button>
                           
                              </>
                              
                              ))
                            }
                              <div className='view-user'>
                           
                           {
                            ans.answer.map((answer) => (
                             
                        <>
                        <div> <p> answered {moment(answer.answerdOn).fromNow()}</p></div>
                       
   
                             
                       <Link to={`/user/${ans.userId}`} style={{color:"black" ,textDecoration : "none" }}>
                       <div className='view-user-bio'> 
                       <Avatar backgroundColor='rgb(20, 194, 194)' color='white' borderRadius='40px' px='13px' py='7px' width='10px'>
                               {answer.userAnswer.charAt(0).toUpperCase()} 
                       </Avatar>
                       <h1>{answer.userAnswer}</h1>
                       </div>
                        </Link>
                       
                        </>
                          
                   ))
                      }
   
                         </div> 
                            </>
                           
                            )
                          }
                           
                      
               






                         <div className='your-ans'>
                          
                            <h2>Your Answer</h2>
                            <form onSubmit={(e) => {handlePostAns(e,ans.answer.length)}}>
                            <textarea type='text' onChange={(e) => setAnswer(e.target.value)} value={Answer} ></textarea>
                            <input type='submit' className='btn' value="Post Your Answer" />
                             </form>
                          </div>
                          
                          <div className='end'>
                            <p>
                        Browse other questions tagged{
                        ans.qnTags.map((tag) =>(
                          <Link to='/tag' key={tag} style={{color:"skyblue" ,textDecoration : "none",padding:"5px 5px" }}>{tag}</Link>
                           ))
                            }or 
                            <Link to='/AskQuestion' style={{color:"skyblue" ,textDecoration : "none" }}> Ask Your own question</Link>
                            </p>
                          </div>
                     
                         
                          
                         
                        
                       </div>
                      
               
            ))}
            </>
        }
      </div>
   
    </>
  )
}
