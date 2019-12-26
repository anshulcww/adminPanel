import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import { connect } from 'react-redux';


class DownloadComponent extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        const data =
{
    columns: [
        {
            label: 'Name',
            field: 'name',
            sort: 'asc',
            width: 150
        },
        {
            label: 'Email',
            field: 'email',
            sort: 'asc',
            width: 270
        },
        {
            label: 'Mobile Number',
            field: 'mobileNumber',
            sort: 'asc',
            width: 200
        },
        {
            label: 'Address',
            field: 'address',
            sort: 'asc',
            width: 100
        },
        {
            label: 'Registered date',
            field: 'timestamp',
            sort: 'asc',
            width: 50
        }
    ],
    rows : this.props.userDetails
}
// console.log(data)
        return (
            <div className='container-fluid'>
                <h1 className='justify text-center'>List of Downloads</h1>
                {/* {
                    this.props.userDetails.map((user, index) => (
                        <li key={index}>{user.user.name}</li>
                    ))
                } */}
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
    userDetails: state.user.user,
})


export default connect(mapStateToProps, {})(DownloadComponent);


