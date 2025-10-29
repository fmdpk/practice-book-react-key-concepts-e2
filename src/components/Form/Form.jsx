import {useReducer} from 'react';
import classes from './Form.module.css';

const initialFormState = {
  email: {
    value: '',
    isValid: null
  },
  password: {
    value: '',
    isValid: null
  }
}

const formReducer = (state, action) => {
  if (action.type === 'EMAIL_CHANGED') {
    return {
      ...state,
      email: {
        value: action.payload,
        isValid: action.payload.includes('@')
      }
    }
  } else if (action.type === 'PASSWORD_CHANGED') {
    return {
      ...state,
      password: {
        value: action.payload,
        isValid: action.payload.trim().length > 7
      }
    }
  } else {
    return state
  }
}

function Form() {
  const [formState, formDispatch] = useReducer(formReducer, initialFormState)

  function handleChangeEmail(event) {
    const value = event.target.value;
    formDispatch({type: 'EMAIL_CHANGED', payload: value})
  }

  function handleChangePassword(event) {
    const value = event.target.value;
    formDispatch({type: 'PASSWORD_CHANGED', payload: value})
  }

  function handleSubmitForm(event) {
    event.preventDefault();

    if (formState.email.isValid && formState.password.isValid) {
      console.log('Good job!');
      console.log(formState.email.value, formState.email.value);
    } else if (formState.password.isValid === null || formState.email.isValid === null) {
      alert('Looks like you forgot to fill in the form!');
    } else if (!formState.email.isValid) {
      alert('Please enter valid email');
    } else if (!formState.password.isValid) {
      alert('Please enter valid password');
    } else {
      alert('Invalid input. Please check your email and password (min. 7 characters).');
    }
  }

  return (
      <form className={classes.form} onSubmit={handleSubmitForm}>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" onChange={handleChangeEmail}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" onChange={handleChangePassword}/>
        </div>
        <button>Submit</button>
      </form>
  );
}

export default Form;
