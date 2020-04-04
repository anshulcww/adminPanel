import { FETCH_DOCTOR_DETAILS, SAVE_CATALOGUE, SAVE_SPECIALITIES} from './types';
import axios from 'axios';
import history from '../history';


export const saveSpecialities = () => async dispatch => {
    return await axios.get('http://www.plunes.co/v4/catalogue_manager/specialities')
        .then(res => {
            if (res.status === 200) {
                //let catalogue = res.data;
                let specialities = [];
                console.log(res.data.data , 'specialities')
                localStorage.setItem('specialities', JSON.stringify(res.data.data));

                // dispatch({
                //     type: SAVE_SPECIALITIES,
                //     payload: specialities
                // })
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

