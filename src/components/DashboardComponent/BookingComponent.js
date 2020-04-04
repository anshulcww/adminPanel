import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MDBDataTable } from 'mdbreact';

class BookingComponent extends Component {
    constructor(props) {
        super(props)
    }

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
                    label: 'Patient Name',
                    field: 'patientName',
                    sort: 'disabled',
                    width: 150
                },
                {
                    label: 'Mobile Number',
                    field: 'patientMobileNumber',
                    sort: 'disabled',
                    width: 150
                },
                {
                    label: 'Prof Name',
                    field: 'professionalName',
                    sort: 'disabled',
                    width: 150
                },
                {
                    label: 'Prof Mobile Number',
                    field: 'professionalMobileNumber',
                    sort: 'disabled',
                    width: 150
                },
                {
                    label: 'Appointment Time',
                    field: 'appointmentTime',
                    sort: 'disabled',
                    width: 150
                },
                {
                    label: 'Service Name',
                    field: 'serviceName',
                    sort: 'disabled',
                    width: 150
                },
                {
                    label: 'Booking Status',
                    field: 'bookingStatus',
                    sort: 'disabled',
                    width: 150
                },
                {
                    label: 'Credit Used',
                    field: 'creditUsed',
                    sort: 'disabled',
                    width: 150
                },
                {
                    label: 'Payment Percent',
                    field: 'paymentPercent',
                    sort: 'disabled',
                    width: 150
                },
                {
                    label: 'Created At',
                    field: 'createdAt',
                    sort: 'disabled',
                    width: 150
                },
                {
                    label: 'Paid Amount',
                    field: 'paidAmount',
                    sort: 'disabled',
                    width: 150
                },
                {
                    label: 'Total Amount',
                    field: 'totalAmount',
                    sort: 'disabled',
                    width: 150
                },
                {
                    label: 'Rest Amount',
                    field: 'restAmount',
                    sort: 'disabled',
                    width: 150
                }
            ],
            rows: this.props.bookingDetails
        }
        return (
            
            <div className='container-fluid'>
                <h1 className='justify text-center'>List of Bookings</h1>
                <div>
                <MDBDataTable
                    striped
                    bordered
                    small
                    data={data}
                    paging={true}
                />
                </div>
               
            </div>
        );
    }
}

const mapStateToProps = state => ({
    bookingDetails: state.user.bookings,
})


export default connect(mapStateToProps, {})(BookingComponent);

