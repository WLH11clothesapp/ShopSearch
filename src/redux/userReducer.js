import axios from 'axios';

const initialState = {
  user_id: '',
  email: '',
  name: '',
  ig_handle: ''
};

const UPDATE_USER = 'UPDATE_USER';

export function updateUser() {
  const data = axios
    .get('/api/user')
    .then(res => {
      console.log(res.data);
      return res.data;
    })
    .catch(err => console.log(err));
  return {
    type: UPDATE_USER,
    payload: data
  };
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_USER + '_FULFILLED':
      console.log(payload);
      return payload
        ? {
            ...state,
            email: payload.email,
            name: payload.name,
            ig_handle: payload.ig_handle,
            user_id: payload.user_id
          }
        : state;
    default:
      return state;
  }
}
