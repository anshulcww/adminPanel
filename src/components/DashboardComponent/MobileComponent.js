import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchDocDetails} from '../../actions/doctorActions'
 
class MobileComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileNumber: ''
        }
        this.handleChange =  this.handleChange.bind(this);
        this.handleSubmit =  this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    async handleSubmit(e) {
        e.preventDefault();
       await this.props.fetchDocDetails(this.state.mobileNumber);
       localStorage.setItem('mobileNumber', this.state.mobileNumber);
    }

    render() {
        return (
            <div className='container'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'>
                    <h3>Please Enter Mobile Number</h3>
                    <form onSubmit= {this.handleSubmit}>
                        <div className="form-group">
                            <input name='mobileNumber' type="tel" className="form-control" placeholder="Enter Mobile Number" maxLength={10} onChange={this.handleChange}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className='col-sm-3'></div>
            </div>
        );
    }
}

export default connect(null, {fetchDocDetails})(MobileComponent);