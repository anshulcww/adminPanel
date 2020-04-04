import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import { connect } from 'react-redux';
// import {fetchDocDetails} from ''

class DoctorComponent extends Component {
    constructor(props) {
        super(props)
        this.clickHandler = this.clickHandler.bind(this)
    }

   async clickHandler(e){
        e.preventDefault();
        // await this.props.fetchDocDetails(e.target.id)
    }

    render() {
        // this.props.docDetails.forEach((d)=> {
        //     d['action'] = <button onClick={this.clickHandler} id= {d.mobileNumber}>View</button>  
        // })
        const data = {
            columns: [
                {
                    label: 'S. no',
                    field: 'id',
                    sort: 'disabled',
                    width: 100
                },
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'disabled',
                    width: 100
                },
                {
                    label : 'Specialities',
                    field:'specialities',
                    sort: 'disabled',
                    width : 150
                },
                {
                    label: 'Email',
                    field: 'email',
                    sort: 'disabled',
                    width: 100
                },
                {
                    label: 'Mobile Number',
                    field: 'mobileNumber',
                    sort: 'disabled',
                    width: 100
                },
                {
                    label: 'Address',
                    field: 'address',
                    sort: 'disabled',
                    width: 100
                },
                {
                    label: 'Registered date',
                    field: 'timestamp',
                    sort: 'disabled',
                    width: 100
                },
                {
                    label: 'Registeration Number',
                    field: 'registrationNumber',
                    sort: 'disabled',
                    width: 100
                },
                {
                    label: 'Catalogue',
                    field: 'action',
                    sort: 'disabled',
                    width: 100
                }
            ],
            rows: this.props.docDetails
        }
        return (
            <div className='container-fluid'>
                <h1 className='justify text-center'>List of Doctors</h1>
                <MDBDataTable
                    striped
                    bordered
                    small
                    data={data}
                    paging={true}
                />
            </div>
        );
    }
}
const mapStateToProps = state => ({
    docDetails: state.user.doctor,
})


export default connect(mapStateToProps, {})(DoctorComponent);


