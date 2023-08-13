import *as api from '../Api/index'
export const getAlluser = () => async (dispatch) => {
   try{

    const {data} = await api.getAlluser()
    dispatch({type:"FETCH-USERS" , payload:data})

   }catch(err){

   }
}


export const updateUser = (id,updateData) => async (dispatch) => {
    try{
      const {data} = await api.updateUser(id,updateData)
      dispatch({type:"UPDATE" , payload:data})

    }catch(error) {
      console.log(error)
    }
}