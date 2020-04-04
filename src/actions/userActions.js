import { FETCH_USERS, FETCH_DOCTORS, FETCH_HOSPITALS, FETCH_BOOKINGS, COVID } from './types';
// import history from './history';
import axios from 'axios';
import CovidComponent from '../components/DashboardComponent/CovidComponent';

export const getCovidBooking = () => async dispatch => {
    return await axios.get('https://plunes.co/v4/analytics/getCovidBooking')
        .then(res => {
            if (res.status === 201 && res.data.success) {
                let covid = res.data.data
                let covidData = []
                let i = 1;
                covid.forEach((c) => {
                        //console.log(c.createdAt)
                    let obj = {
                        id: i++,
                        name: c.name,
                        mobileNumber: c.mobileNumber,
                        address: c.message,
                        createdAt : c.createdAt
                    }
                    covidData.push(obj)
                })
                console.log(covidData)
                dispatch({
                    type : COVID,
                    payload : covidData
                })
            }
        })
}

export const fetchBookings = () => async dispatch => {
    return await axios.get('https://plunes.co/v4/booking/all')
        .then(res => {
            if (res.status === 201 && res.data.success) {
                let bookings = res.data.booking;
                let bookingData = [];
                let id = 1;
                bookings.forEach((b) => {
                    let createdAt;
                    let pos = b.solutionServiceId.split("|")[2]
                    if (b.createdAt) {
                        createdAt = b.createdAt.replace('T', ' ').replace('Z', ' ').slice(0, b.createdAt.length - 5)
                    }
                    let paidAmount = (Number(b.service.newPrice[pos]) - Number(b.creditsUsed)) * Number(b.paymentPercent) / 100;
                    let totalAmount = Number(b.service.newPrice[pos]);
                    let restAmount = (Number(b.service.newPrice[pos]) - Number(b.creditsUsed)) - paidAmount

                    let bookDet = {
                        'id': id++,
                        'patientName': b.userName,
                        'patientMobileNumber': b.userMobileNumber,
                        'professionalName': b.professionalName,
                        'professionalMobileNumber': b.professionalMobileNumber,
                        'appointmentTime': b.appointmentTime,
                        'bookingStatus': b.bookingStatus,
                        'serviceName': b.serviceName,
                        'creditUsed': b.creditsUsed,
                        'paymentPercent': b.paymentPercent,
                        'createdAt': createdAt,
                        'paidAmount': paidAmount,
                        'totalAmount': totalAmount,
                        'restAmount': restAmount
                    }
                    bookingData.push(bookDet)
                })
                // console.log(bookingData, 'booking data')
                dispatch({
                    type: FETCH_BOOKINGS,
                    payload: bookingData
                })
            }
        })
}


export const fetchAllUsers = () => async dispatch => {
    return await axios.get('https://plunes.co/v4/analytics/users')
        .then(res => {
            if (res.status === 201) {
                let users = res.data.data.filter((u) => u.user.userType == 'User');
                let doctors = res.data.data.filter((u) => u.user.userType == 'Doctor');
                let hospitals = res.data.data.filter((u) => u.user.userType == 'Hospital');
                let userData = [];
                let doctorData = [];
                let hospitalData = [];
                let userId = 1;
                let docId = 1;
                let hospitalId = 1;
                users.forEach((u) => {
                    var datetime = new Date(u.timestamp);
                    var now = datetime.toLocaleString();
                    let userDet = {
                        id: userId++,
                        name: u.user.name,
                        email: u.user.email,
                        mobileNumber: u.user.mobileNumber,
                        address: u.user.address,
                        timestamp: now
                    }
                    userData.push(userDet)
                })
                dispatch({
                    type: FETCH_USERS,
                    payload: userData
                })
                let allSpecialities = JSON.parse(localStorage.getItem('specialities'));
                //console.log(JSON.parse(allSpecialities) , 'all specialities')
                doctors.forEach((d) => {
                    var datetime = new Date(d.timestamp);
                    var now = datetime.toLocaleString();
                    let specialities = [];
                    if (d.user.specialities.length > 0) {
                        d.user.specialities.forEach((s) => {
                            allSpecialities.forEach((a) => {
                                if (s.specialityId === a._id) {
                                    specialities.push(a.speciality + ', ')
                                }
                            })
                        })
                    }
                    let docDet = {
                        id: docId++,
                        name: d.user.name,
                        email: d.user.email,
                        mobileNumber: d.user.mobileNumber,
                        address: d.user.address,
                        timestamp: now,
                        registrationNumber: d.user.registrationNumber,
                        experience: d.user.experience,
                        specialities: specialities,
                        userType: d.user.userType
                    }
                    doctorData.push(docDet)
                })
                dispatch({
                    type: FETCH_DOCTORS,
                    payload: doctorData
                })
                hospitals.forEach((h) => {
                    var datetime = new Date(h.timestamp);
                    var now = datetime.toLocaleString();
                    let hospitalDoctors = []
                    if (h.user.doctors && h.user.doctors.length > 0) {
                        h.user.doctors.forEach((d) => {
                            //console.log(d)
                            if (d.specialities.length > 0) {
                                // console.log('anshul')
                                allSpecialities.forEach((a) => {
                                    // console.log(d, 'd')
                                    if (d.specialities.length > 0) {
                                        d.specialities.forEach((spec) => {
                                            if (spec.specialityId === a._id) {
                                                // console.log('anshul')
                                                hospitalDoctors.push(d.name + '(' + a.speciality + '), ')
                                            }
                                        })
                                    }
                                    // if(d.specialities.specialityId === a._id ){
                                    //     // console.log('a')
                                    //     //console.log(a.speciality)
                                    //     //specialities.push(a.speciality + ', ')
                                    // }
                                })
                            }
                        })
                    }
                    let hosDet = {
                        id: hospitalId++,
                        name: h.user.name,
                        email: h.user.email,
                        mobileNumber: h.user.mobileNumber,
                        address: h.user.address,
                        timestamp: now,
                        registrationNumber: h.user.registrationNumber,
                        experience: h.user.experience,
                        specialities: h.user.specialities,
                        userType: h.user.userType,
                        doctors: hospitalDoctors,
                        accountHolderName: h.user.bankDetails ? h.user.bankDetails.name : false,
                        bankName: h.user.bankDetails ? h.user.bankDetails.bankName : false,
                        ifscCode: h.user.bankDetails ? h.user.bankDetails.ifscCode : false,
                        accountNumber: h.user.bankDetails ? h.user.bankDetails.accountNumber : false,
                        panNumber: h.user.bankDetails ? h.user.bankDetails.panNumber : false
                    }
                    // {name, bankName, ifscCode, accountNumber, panNumber}
                    //Unhandled Rejection (Error): Objects are not valid as a React child (found: object with keys {name, bankName, ifscCode, accountNumber, panNumber}). If you meant to render a collection of children, use an array instead.
                    hospitalData.push(hosDet)
                })
                dispatch({
                    type: FETCH_HOSPITALS,
                    payload: hospitalData
                })
            }
        })
};




