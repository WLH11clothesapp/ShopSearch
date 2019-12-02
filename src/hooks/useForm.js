import { useState } from 'react';

function isEmpty(obj) {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}

export const useForm = (callback, login) => {
  ///callback is function to call if tests are passed. login is true if its the login component
  const [state, setState] = useState({
    /// used for values in input boxes where useForm is called
    email: '',
    name: '',
    igHandle: '',
    password: ''
  });
  const errors = {}; //is used to return errors for display

  const handleChange = event => {
    /// handle changes for typing in input boxes where hook is called
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  function validate(values) {
    console.log('login', login)
    /// state will be put in for values
    if ( !login && !values.name ) {///test for name is there and if its longer than 3
      errors.name = 'Must enter a name'; /// || login is to make sure it doesn't go off in the login form
    } else if (!login && values.name.length < 3 ) {
      errors.name = 'Username needs to be more than 3 characters'; /// || login is to make sure it doesn't go off in the login form
    }

    if ( !values.email ) {
      /// checks for email and if it's in the right format
      errors.email = 'Must enter an email'; /// || login is to make sure it doesn't go off in the login form
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.name = 'Invalid Email address'; /// || login is to make sure it doesn't go off in the login form
    }

    if ( !values.password ) {
      /// checks for password and if its longer than 2
      errors.name = 'Password is required'; /// || login is to make sure it doesn't go off in the login form
      ;
    } else if (values.password.length < 3) {
      errors.name = 'Password needs to be more than 2 characters'; /// || login is to make sure it doesn't go off in the login form
      ;
    }

    if ( !login && !values.igHandle  ) {
      // checks for igHandle and if it starts with @
      errors.name = 'Must enter an Instagram handle'; /// || login is to make sure it doesn't go off in the login form
    } else if (!/@\S+/.test(values.igHandle) && !login) {
      errors.name = 'follow format @yourHandle'; /// || login is to make sure it doesn't go off in the login form
    }
    console.log('errors 1', errors)
    return errors;
  }

   const handleSubmit = () => {
    /// to run when submit button on form checks test are passed then updates errors or runs callback
    console.log(validate(state))
    console.log('isEmpty', isEmpty(errors))
    if (isEmpty(errors)) {
      console.log('passed is empty')
      let data;
      callback().then(res => {
        if (res === 'Incorrect Password'){
          errors.password = res
        } else if (res.includes('Email') ){
          errors.email = res
        }
      }
      ).catch(err => console.log(err))
       console.log('data', data)
    }
  }; 


  return {
    //stuff to pass back to forms
    state,
    errors,
    handleChange,
    handleSubmit
  };
};
