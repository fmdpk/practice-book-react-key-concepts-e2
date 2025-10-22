import {lazy, Suspense, useCallback, useState} from 'react';

const Signup = lazy(() => import(
    './Signup/Signup.jsx'
    )
);

import Login from './Login/Login.jsx';
import classes from './Authentication.module.css';

function Authentication() {
  const [mode, setMode] = useState('login');

  const handleSwitchAuthMode = () => {
    setMode((prevMode) => (prevMode === 'login' ? 'signup' : 'login'));
  }

  let authElement = <Login />;
  let switchBtnCaption = 'Create a new account';

  if (mode !== 'login') {
    authElement = <Signup />;
    switchBtnCaption = 'Login instead';
  }

  return (
    <div className={classes.auth}>
      <h1>You must authenticate yourself first!</h1>
      <Suspense fallback={<p>Loading...</p>}>{authElement}</Suspense>
      <button className={classes.btn} onClick={handleSwitchAuthMode}>{switchBtnCaption}</button>
    </div>
  );
}

export default Authentication;
