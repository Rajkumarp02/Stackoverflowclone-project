import axios from 'axios'


const API = axios.create({baseURL:"http://localhost:8000"})

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
      req.headers.authorization = `Bearer ${
        JSON.parse(localStorage.getItem("profile")).token
      }`;
    }
    return req;
  });

export const logIn = (authdata) => API.post('/user/login',authdata)
export const signUp = (authdata) => API.post('/user/signup',authdata)

export const question = (authdata) => API.post('/Question/AskQuestion',authdata) 
export const getQuestion = () => API.get('/Question/get');
export const deleteQuestion = (id) => API.delete(`/Question/delete/${id}`)
export const voteQuestion = (id,value,userId) => API.patch(`/Question/vote/${id}`,{value,userId})
export const postAnswer =(id,noOfAns,answerBody,userAnswer,userId) => API.patch(`/answer/post/${id}`,{noOfAns,answerBody,userAnswer,userId})
export const deleteAnswer = (id,answerId,noOfAns) =>API.patch(`/answer/delete/${id}`,{answerId,noOfAns})
export const getAlluser = () => API.get('/user/getAlluser');
export const updateUser = (id,updateData) => API.patch(`/user/update/${id}`,updateData)