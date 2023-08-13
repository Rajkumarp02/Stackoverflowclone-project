
import * as api from '../Api/index.js'


export const question = (authdata,navigator) => async (dispatch) => {
    try{
        const {data} = await api.question(authdata)
        dispatch({type:'POST',payload:data})
        dispatch(allQuestion())
        navigator("/");
    
    }catch(err){
       console.log(err)
    }
    }

 export const allQuestion = () => async (dispatch) => {
    try{
        const {data} = await api.getQuestion()
        dispatch({type:'FETCH-DATA-ANSQN',payload:data})
    }catch(err){
        console.log(err)
    }
 }


 export const postAnswer = (answerData) => async (dispatch) => {
  console.log(answerData);
    try {
      const { id, noOfAns, answerBody, userAnswer,userId } = answerData;
      const { data } = await api.postAnswer(
        id,
        noOfAns,
        answerBody,
        userAnswer,
        userId
      );
      console.log(data)
      dispatch({ type: "POST_ANSWER", payload: data });
      dispatch(allQuestion)
    } catch (error) {
      console.log(error);
    } 
  };


  export const deleteQuestion = (id,navigate) =>  async (dispatch) => {
    try{
       const {data} = api.deleteQuestion(id)
       console.log(data);
       dispatch(allQuestion())
       navigate("/")
    }catch(err){
      console.log(err)
    }
  }

  export const deleteAnswer = (id,answerId,noOfAns) => async (dispatch) => {
    try {
      const {data} = await api.deleteAnswer(id,answerId,noOfAns)
      console.log(data);
      dispatch(allQuestion())
    } catch (error) {
      console.log(error)
    }
  }

  export const voteQuestion = (id, value) => async (dispatch) => {
    try {
      await api.voteQuestion(id, value);
      dispatch(allQuestion());
    } catch (error) {
      console.log(error);
    }
  };
  