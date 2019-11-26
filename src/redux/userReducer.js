import axios from 'axios';

const initialState = {
  user_id: 0,
  email: '',
  name: '',
  ig_handle: ''
};

const UPDATE_USER = 'UPDATE_USER';

export function updateUser(userObj) {
  return {
    type: UPDATE_USER,
    payload: userObj
  };
}

export function resetUser() {
  return {
    type: UPDATE_USER,
    payload: initialState
  };
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_USER:
      // console.log(payload);
      return {
        ...state,
        email: payload.email,
        name: payload.name,
        ig_handle: payload.ig_handle,
        user_id: payload.user_id
      };
    default:
      return state;
  }
}
