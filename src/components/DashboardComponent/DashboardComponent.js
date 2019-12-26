import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { fetchUsers } from '../../actions/userActions'

class DashboardComponent extends Component {
    
    render() {
        return (
            <div className='container-fluid'>
                <h1 className='justify text-center'>Admin Panel</h1>
                <hr></hr>
                <div className='row'>
                    <div className='col text-center'><a href='/downloads'>List of Downloads</a></div>
                    <div className='col text-center'><a href='/doctors'>List of Doctors</a></div>
                    <div className='col text-center'><a href='/hospitals'>List of Hospitals</a></div>
                </div>
            </div>
        )
    }
}
export default connect(null, {})(DashboardComponent);

// export default DashboardComponent;