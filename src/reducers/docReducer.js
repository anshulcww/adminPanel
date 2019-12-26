import { FETCH_DOCTOR_DETAILS, SAVE_CATALOGUE, SAVE_SPECIALITIES } from '../actions/types';

const initialState = {
  doctor: {},
  catalogue: [],
  specialities: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_DOCTOR_DETAILS:
      return {
        ...state,
        doctor: action.payload
      };
    case SAVE_CATALOGUE:
      return {
        ...state,
        catalogue: action.payload
      };
    case SAVE_SPECIALITIES:
      return {
        ...state,
        specialities: action.payload
      };
    default:
      return state;
  }
}
