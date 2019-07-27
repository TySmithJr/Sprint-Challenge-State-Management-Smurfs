import React from 'react';
import { deleting_smurfs } from './actions'
import { connect } from "react-redux"
const Smurfs = (props) => {
    console.table(props)
    return (
        <div>
            
            <h1> {props.smurf.name} </h1>
            <h1> {props.smurf.age} </h1>
            <h1> {props.smurf.height} </h1>
             <button onClick={()=>props.deleting_smurfs(props.smurf.id)}>REMOVE</button>
        </div>
    );
};

export default connect(null,{ deleting_smurfs })(Smurfs);