import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { fetchUsers } from '../../actions/userActions'
import { Link } from 'react-router-dom'


class DashboardComponent extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <br></br>
                <br></br>
                <h1 className='justify text-center'>Admin Panel</h1>
                <br></br>
                <hr></hr>
                <br></br>
                <br></br>
                <br></br>
                <div className='row'>
                    <div className='col text-center'><Link to='/downloads'>List of Downloads</Link></div>
                    <div className='col text-center'><Link to='/doctors'>List of Doctors</Link></div>
                    <div className='col text-center'><Link to='/hospitals'>List of Hospitals</Link></div>
                    <div className='col text-center'><Link to='/bookings'>List of Bookings</Link></div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className = 'row'>
                    <div className='col text-center'><Link to='/covid'>List of Covid Query</Link></div>
                    <div className='col text-center'></div>
                    <div className='col text-center'></div>
                    <div className='col text-center'></div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className='row'>
                    {/* <div className='col text-center'><a href='/plockr-tracker'>List of Plockr</a></div> */}
                    <div className='col text-center'></div>
                </div>
            </div>
        )
    }
}
export default connect(null, {})(DashboardComponent);

