import React from "react";
import { useDispatch } from "react-redux";
import useInput from "../hooks/use-input";
import "./SignIn.css";
import { signInHandler } from "../store/auth-actions";
function SignIn() {
  const dispatch = useDispatch();
  const {
    value: username,
    valueIsTouched: usernameIsTouched,
    valueIsValid: usernameIsValid,
    handleValueChange: handleUsernameChange,
    handleValueBlurChange: handleUsernameBlurChange,
  } = useInput((v) => v.trim() !== "");
  const {
    value: password,
    valueIsTouched: passwordIsTouched,
    valueIsValid: passwordIsValid,
    handleValueChange: handlePasswordChange,
    handleValueBlurChange: handlePasswordBlurChange,
  } = useInput((v) => v.length >= 5);

  const handleFormSubmit = (e) => {
    if (usernameIsValid && passwordIsValid) {
      dispatch(signInHandler({ username, password, returnSecureToken: true }));
    } else if (!usernameIsValid && !passwordIsValid) alert("Submit properly");
    else if (!passwordIsValid) alert("Password is not valid");
    else alert("Username is not valid");
  };
  return (
    <form className="loginForm" onSubmit={handleFormSubmit}>
      <label>Username</label>
      <input
        className={`${usernameIsTouched && !usernameIsValid && "invalid"}`}
        type="text"
        value={username}
        placeholder="Username or registered e-mail id"
        onBlur={handleUsernameBlurChange}
        onChange={handleUsernameChange}
      />
      {!usernameIsValid && usernameIsTouched && <p>Username cannot be empty</p>}
      <label>Password</label>
      <input
        className={`${passwordIsTouched && !passwordIsValid && "invalid"}`}
        type="password"
        value={password}
        placeholder="Password"
        onBlur={handlePasswordBlurChange}
        onChange={handlePasswordChange}
      />
      {!passwordIsValid && passwordIsTouched && (
        <p>Password cannot be less than 8 characters</p>
      )}
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignIn;
