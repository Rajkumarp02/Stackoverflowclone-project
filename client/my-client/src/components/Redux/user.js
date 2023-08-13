 const getAlluser = (state =[],action) => {
 switch (action.type) {
    case "FETCH-USERS":
      return action.payload;
    case "UPDATE" :
      return state.map(state => state._id === action.payload._id ? action.payload : state)
 
    default:
       return state;
 }
}

export default getAlluser;