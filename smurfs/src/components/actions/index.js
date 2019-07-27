import axios from "axios";
export const GET_SMURF_START = "GET_SMURF_START"
export const GET_SMURF_SUCCESS = "GET_SMURF_SUCCESS"
export const GET_SMURF_FAILURE = "GET_SMURF_FAILURE"

export const fetching_smurfs = () => dispatch => {
    dispatch({type: GET_SMURF_START})
    axios.get("http://localhost:3333/smurfs")
    .then(res=> dispatch({type: GET_SMURF_SUCCESS, payload:res.data}))
    .catch(error=> dispatch({type: GET_SMURF_FAILURE, payload: error}));
    
}

export const POST_SMURF_START = "POST_SMURF_START"
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS"
export const POST_SMURF_FAILURE = "POST_SMURF_FAILURE"

export const posting_smurfs = (smurfs) => dispatch => {
    dispatch({type: POST_SMURF_START})
    return axios.post("http://localhost:3333/smurfs",smurfs)
    .then(res=> dispatch({type: POST_SMURF_SUCCESS, payload:res.data}))
    .catch(error=> dispatch({type:POST_SMURF_FAILURE, payload: error}));
}


export const DELETE_SMURF_START = "DELETE_SMURF_START"
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS"
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE"

export const deleting_smurfs = (id) => dispatch => {
    dispatch({type: DELETE_SMURF_START})
    return axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res=> dispatch({type: DELETE_SMURF_SUCCESS, payload:res.data}))
    .catch(error=> dispatch({type:DELETE_SMURF_FAILURE, payload: error}));
}
