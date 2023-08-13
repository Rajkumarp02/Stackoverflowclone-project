const question = (state = {data:null},action) =>
{
  switch(action.type){
    case "POST":
      return{...state};
      case "POST_ANSWER":
      return { ...state};
      case "FETCH-DATA-ANSQN":
      return{...state ,data:action.payload};
     
     default:
        return state;
  }
}

export default question;
 