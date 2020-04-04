import React, { Component } from 'react';
import {getCovidBooking} from '../../actions/userActions'
import { connect } from 'react-redux';
import { MDBDataTable } from 'mdbreact';

class CovidComponent extends Component {
    constructor(props){
        super(props)
    }

    async componentDidMount(){
        await this.props.getCovidBooking()
    }

    render() {
        const data =
        {
            columns: [
                {
                    label: 'S.no',
                    field: 'id',
                    sort: 'disabled',
                    width: 10
                },
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'disabled',
                    width: 50
                },
                {
                    label: 'Mobile Number',
                    field: 'mobileNumber',
                    sort: 'disabled',
                    width: 50
                },
                {
                    label: 'Address',
                    field: 'address',
                    sort: 'disabled',
                    width: 200
                },
                {
                    label: 'Created At',
                    field: 'createdAt',
                    sort: 'disabled',
                    width: 200
                }
            ],
            rows: this.props.covidDetails
        }
        return (
            <div className='container-fluid'>
                                <h1 className='justify text-center'>List of Covid Bookings</h1>
                                <div>
                    {
                        this.props.covidDetails.length > 0 ?  <MDBDataTable
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
    covidDetails: state.user.covid,
})

export default connect(mapStateToProps, {getCovidBooking})(CovidComponent);
