import { FETCH_DOCTOR_DETAILS, SAVE_CATALOGUE, SAVE_SPECIALITIES} from './types';
import axios from 'axios';
import history from '../history';


export const saveCatalogue = () => async dispatch => {
    return await axios.get('https://plunes.co/v4/catalogue')
        .then(res => {
            if (res.status === 201) {
                let catalogue = res.data;
                let specialities = [];
                catalogue.forEach(element => {
                    let speciality = {
                        specialityId: element._id,
                        specialityName: element.speciality
                    }
                    specialities.push(speciality)
                })
                dispatch({
                    type: SAVE_CATALOGUE,
                    payload: catalogue
                })
                dispatch({
                    type: SAVE_SPECIALITIES,
                    payload: specialities
                })
            }
        })
};


export const fetchDocDetails = (mobileNumber) => async dispatch => {
    return await axios.get('https://plunes.co/v4/user?mobileNumber=' + mobileNumber)
        .then(res => {
            if (res.status === 201) {
                dispatch({
                    type: FETCH_DOCTOR_DETAILS,
                    payload: res.data.user ? res.data.user : {}
                })
                history.push('/docform')
            }
        })
};

