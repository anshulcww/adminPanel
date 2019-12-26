import React, { Component } from 'react';
import MobileComponent from './MobileComponent'

class EditDoctorComponent extends Component {
    render() {
        return (
            <div className='container-fluid jumbotron'>
                <MobileComponent />
            </div>
        );
    }
}

export default EditDoctorComponent;