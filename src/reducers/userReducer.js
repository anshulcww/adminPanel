import { FETCH_USERS, FETCH_DOCTORS, FETCH_HOSPITALS } from '../actions/types';

const initialState = {
  user: [],
  doctor: [],
  hospital: []
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
    default:
      return state;
  }
}
