import React from "react";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    emailError,
    passwordError,
    setHasAccount,
  } = props;

  return <section className="login">
    <div className="loginContainer">
      <label>Username</label>
      <input type="text"
      autoFocus
      required
      value={email}
      onChange={(e) => setEmail(e.target.value)} />
      <p className="errorMsg">{emailError}</p>
      <label>Password</label>
      <input
      type="password"
      required
      value={password}
      onChange={(e) => setPassword(e.target.value)} />
      <p className="errorMsg">{passwordError}</p>
      <div className="btnContainer">
        {hasAccount ? (
          <>
            <button onClick={handleLogin}>Sign in</button>
            <p>Don't Have an Account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
          </>
        ):(
          <>
          <button onClick={handleSignup}>Sign Up</button>
            <p> Have an Account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
          </>
        )
        }
      </div>
    </div>
  </section>;
};

export default Login;
