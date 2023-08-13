//import Auth from "../pages/Auth";

const reducer = (state = {data:null},action) =>
{
  switch(action.type){
    case "AUTH":
      localStorage.setItem('profile',JSON.stringify({...action?.data}))
      return{...state ,data:action?.data}
      case "LOGOUT":
        localStorage.clear();
        return{...state,data:null};
      default:
        return state;
  }
 

}

export default reducer;
