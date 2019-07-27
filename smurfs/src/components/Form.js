import React, { Component } from 'react';
import { posting_smurfs } from './actions';
import { connect } from "react-redux";
class Form extends Component {
    state={
        name: "",
        age: "",
        height: ""


    }
    // added change handler to target the value 
    handleChange = (e)=> {
        this.setState({[e.target.name]: e.target.value})
    } 
    // created addInfo function to add everything I'm typing in
     addInfo = (e) => {
        e.preventDefault()
        this.props.posting_smurfs(this.state)
        
    }
    render() {
        
        return (
            <div>
                <form onSubmit={this.addInfo}>
                    <input onChange={this.handleChange} name="name" value={this.state.name} />
                    <input onChange={this.handleChange} name="age" value={this.state.age} />
                    <input onChange={this.handleChange} name="height" value={this.state.height} />
                    <button>ADD</button>
                </form>
            </div>
        );
    }
}


export default connect(null,{posting_smurfs})(Form);
