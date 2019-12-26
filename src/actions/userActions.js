import { FETCH_USERS, FETCH_DOCTORS, FETCH_HOSPITALS } from './types';
import axios from 'axios';
// import history from '../history';

export const fetchAllUsers = () => async dispatch => {
    return await axios.get('https://plunes.co/v4/analytics/users')
        .then(res => {
            if (res.status === 201) {
                let users = res.data.data.filter((u) => u.user.userType == 'User');
                let doctors = res.data.data.filter((u) => u.user.userType == 'Doctor');
                // console.log(doctors)
                let hopitals = res.data.data.filter((u) => u.user.userType == 'Hospital');
                let userData = [];
                let doctorData = [];
                let hospitalData = [];
                users.forEach((u) => {
                    var datetime = new Date(u.timestamp);
                    var now = datetime.toLocaleString();
                    let userDet = {
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
                doctors.forEach((d) => {
                    var datetime = new Date(d.timestamp);
                    var now = datetime.toLocaleString();
                    let docDet = {
                        name: d.user.name,
                        email: d.user.email,
                        mobileNumber: d.user.mobileNumber,
                        address: d.user.address,
                        timestamp: now,
                        registrationNumber : d.user.registrationNumber,
                        experience : d.user.experience,
                        specialities : d.user.specialities,
                        userType : d.user.userType
                    }
                    doctorData.push(docDet)
                })
                // console.log(doctorData)
                dispatch({
                    type: FETCH_DOCTORS,
                    payload: doctorData
                })
                hopitals.forEach((h) => {
                    var datetime = new Date(h.timestamp);
                    var now = datetime.toLocaleString();
                    let hosDet = {
                        name: h.user.name,
                        email: h.user.email,
                        mobileNumber: h.user.mobileNumber,
                        address: h.user.address,
                        timestamp: now,
                        registrationNumber : h.user.registrationNumber,
                        experience : h.user.experience,
                        specialities : h.user.specialities,
                        userType : h.user.userType
                    }
                    hospitalData.push(hosDet)
                })
                // console.log(doctorData)
                dispatch({
                    type: FETCH_HOSPITALS,
                    payload: hospitalData
                })
            }
        })
};




