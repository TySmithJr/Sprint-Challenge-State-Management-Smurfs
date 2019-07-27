import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetching_smurfs } from "./actions/index"
import Smurfs from "./Smurfs"

class SmurfList extends Component {
    componentDidMount(){this.props.fetching_smurfs()}
    render() {
        console.log(this.props.smurfs.smurfs, "props")
        return (
            <div>
                {this.props.smurfs.smurfs.map(( smurf, i)=>
                    <Smurfs smurf={smurf} key={i} />) }
                
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state, "state")
    return {smurfs: state}
}
export default connect(mapStateToProps, {fetching_smurfs})(SmurfList);