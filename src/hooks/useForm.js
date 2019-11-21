import { useState } from "react";

export const useForm = (callback, login) => {
  ///callback is function to call if tests are passed. login is true if its the login component
  const [state, setState] = useState({
    /// used for values in input boxes where useForm is called
    email: "",
    name: "",
    igHandle: "",
    password: ""
  });
  const [errors, setErrors] = useState({}); //is used to return errors for display

  const handleChange = event => {
    /// handle changes for typing in input boxes where hook is called
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  function validate(values) {
    /// state will be put in for values
    const errors = {};

    if (!values.name || login) {
      ///test for name is there and if its longer than 3
      errors.name = "Must enter a name"; /// || login is to make sure it doesn't go off in the login form
    } else if (values.name.length < 3 || login) {
      errors.name = "Username needs to be more than 3 characters";
    }

    if (!values.email) {
      /// checks for email and if it's in the right format
      errors.email = "Must enter an email";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Invalid Email address";
    }

    if (!values.password) {
      /// checks for password and if its longer than 2
      errors.password = "Password is required";
    } else if (values.password.length < 3) {
      errors.password = "Password needs to be more than 2 characters";
    }

    if (!values.igHandle || login) {
      // checks for igHandle and if it starts with @
      errors.igHandle = "Must enter an Instagram handle";
    } else if (!/@\S+/.test(values.igHandle) || login) {
      console.log("hit");
      errors.igHandle = "follow format @yourHandle";
    }
    return errors;
  }

  const handleSubmit = () => {
    /// to run when submit button on form checks test are passed then updates errors or runs callback
    setErrors(validate(state));
    console.log("errors", errors);
    if (Object.keys(errors).length === 0) {
      console.log("hit callback");
      callback();
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
