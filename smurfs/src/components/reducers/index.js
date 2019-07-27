import { GET_SMURF_START, GET_SMURF_SUCCESS, GET_SMURF_FAILURE, 
  POST_SMURF_START ,POST_SMURF_SUCCESS, POST_SMURF_FAILURE,
  DELETE_SMURF_START, DELETE_SMURF_SUCCESS, DELETE_SMURF_FAILURE
} from '../actions';

const initialState = {
    smurfs:[],
    error: "",
    isFetching: false
}
  
//   always have a start and success failure 
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_SMURF_START:
    
    return {
        ...state, isFetching: true, error:""
    }
    case GET_SMURF_SUCCESS:
    return {
        ...state, isFetching: false, smurfs: action.payload
    }
    case GET_SMURF_FAILURE:
    return {
      ...state, error: action.payload
    }

    case POST_SMURF_START:
  return{
    ...state, isFetching: true, error: ""
  }
  case POST_SMURF_SUCCESS: 
  return {
    ...state, isFetching: false, smurfs: action.payload
  }
  case POST_SMURF_FAILURE:
  return {
    ...state, error: action.payload
  }

  case DELETE_SMURF_START:
  return{
    ...state, isFetching: true, error: ""
  }
  case DELETE_SMURF_SUCCESS: 
  return {
    ...state, isFetching: false, smurfs: action.payload
  }
  case DELETE_SMURF_FAILURE:
  return {
    ...state, error: action.payload
  }


      default:
        return state;
    }
  };

  