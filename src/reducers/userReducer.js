import { FETCH_USERS, FETCH_DOCTORS, FETCH_HOSPITALS, FETCH_BOOKINGS, COVID } from '../actions/types';

const initialState = {
  user: [],
  doctor: [],
  hospital: [],
  bookings: [],
  covid:[]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        user: action.payload
      };
    case FETCH_DOCTORS:
      return {
        ...state,
        doctor: action.payload
      }
    case FETCH_HOSPITALS:
      return {
        ...state,
        hospital: action.payload
      }
    case FETCH_BOOKINGS: 
      return {
        ...state,
        bookings: action.payload
      }  
    case COVID: 
      return {
        ...state,
        covid: action.payload
      }  
    default:
      return state;
  }
}
