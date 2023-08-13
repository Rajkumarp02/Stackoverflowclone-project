import React, { useState } from 'react'
import './Ask.css'
import { useDispatch, useSelector } from 'react-redux';
import {question} from "../../components/actions/question"
import { useNavigate } from 'react-router-dom';


export default function AskQuestion() {

const[qnTitle,setQnTitle] = useState("");
const[qnBody,setQnBody] = useState("");
const[qnTags,setQnTags] = useState("");

const dispatch = useDispatch();
const User =useSelector((state) => state.currentuserReducer)
const navigator = useNavigate()

const handleSubmit =(e) => {
   e.preventDefault()
   console.log({qnTitle,qnBody,qnTags,});

   dispatch(question({qnTitle,qnBody,qnTags, userPosted:User.result.name,userId:User?.result._id},navigator))
}

const handleEnter = (e) => {
   if(e.key === 'Enter'){
    setQnBody(qnBody + "\n")
   }
}

  return (
    <>
     {
       
        <div className='ask-qn'>
            <div className='ask-head'>
                <h1>Ask a public Question</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className='ask-container'>
                      <div className='qn-title'>
                       <h4>Title</h4>
                       <p>Be specific and imagine you're asking a question to another person</p>
                       <input type='text' placeholder='e.g what is array' name='text' onChange={(e) =>setQnTitle(e.target.value) } required/>
                      </div>

                      <div className='qn-title'>
                       <h4>Body</h4>
                       <p>Include all the information someone would need to answer your question</p>
                       <textarea type='text' name='text' className='text-area' onChange={(e) =>setQnBody(e.target.value)} onKeyPress={handleEnter} required></textarea>
                       </div>


                      <div className='qn-title'>
                       <h4>Tags</h4>
                       <p>Add up to 5 tags to describe what your question is about</p>
                       <input type='text' placeholder='e.g {xml typescript wordpress}' name='text' onChange={(e) =>setQnTags(e.target.value.split(" ")) } required/>
                      </div>
                    </div>
                   <button type='submit' className='btn'> submit AskQuestion</button>
                </form>

            </div>

        </div>
     } 
    </>
  )
}
