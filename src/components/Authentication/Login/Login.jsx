import {lazy, Suspense, useCallback, useState} from 'react';

const ResetPassword = lazy(() => import(
    './ResetPassword.jsx'
    )
);

function Login() {
  const [isResetting, setIsResetting] = useState(false);

  function handleLogin(event) {
    event.preventDefault();
  }

  const handleFinishResetPassword = useCallback(() => {
    setIsResetting(false);
  }, [])

  function handleStartResetPassword() {
    setIsResetting(true);
  }

  return (
    <>
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
        </div>
        <button className="main-btn">Login</button>
      </form>
      <button className="alt-btn" onClick={handleStartResetPassword}>
        Reset password
      </button>
      <Suspense fallback={<p>Loading...</p>}>
        {isResetting && <ResetPassword onFinish={handleFinishResetPassword} />}
      </Suspense>
    </>
  );
}

export default Login;
