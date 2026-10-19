

const initialState = {
    movies: []
};

const Reducer = (state = initialState , action)=>{
    switch (action.type) {
        case "GET_DATA":
           return{
                ...state,
                 movies: action.data
           }
    default:
      return state;
        
    }
}

export default Reducer;