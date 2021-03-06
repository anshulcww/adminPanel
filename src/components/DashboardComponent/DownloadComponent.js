import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

class DownloadComponent extends Component {
    constructor(props) {
        super(props)
    }

    notify = () => toast("Wow so easy !");

    render() {
        const data =
        {
            columns: [
                {
                    label: 'S.no',
                    field: 'id',
                    sort: 'disabled',
                    width: 150
                },
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'disabled',
                    width: 150
                },
                {
                    label: 'Email',
                    field: 'email',
                    sort: 'disabled',
                    width: 270
                },
                {
                    label: 'Mobile Number',
                    field: 'mobileNumber',
                    sort: 'disabled',
                    width: 200
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
                    width: 50
                }
            ],
            rows: this.props.userDetails
        }
        return (

            <div className='container-fluid'>
                
                <h1 className='justify text-center'>List of Downloads</h1>
                {/* {
                    this.props.userDetails.map((user, index) => (
                        <li key={index}>{user.user.name}</li>
                    ))
                } */}
                <div>
                    {
                        this.props.userDetails.length > 0 ?  <MDBDataTable
                        striped
                        bordered
                        small
                        data={data}
                        paging={true}
                    /> : <div><h2>Loading.....</h2></div>
                    }
               
                </div>
               
            </div>
        );
    }
}
const mapStateToProps = state => ({
    userDetails: state.user.user,
})


export default connect(mapStateToProps, {})(DownloadComponent);


