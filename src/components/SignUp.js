import React from "react";
import "./SignIn.css";
import useInput from "../hooks/use-input";
import { useDispatch } from "react-redux";
import signUpHandler from "../store/auth-actions";
function SignUp() {
  const dispatch = useDispatch();
  // const loginState = useSelector(state => state.auth.isLoggedIn)
  const {
    value: name,
    valueIsTouched: nameIsTouched,
    valueIsValid: nameIsValid,
    handleValueChange: handleNameChange,
    handleValueBlurChange: handleNameBlurChange,
  } = useInput((v) => v.trim() !== "");

  const {
    value: address,
    valueIsTouched: addressIsTouched,
    valueIsValid: addressIsValid,
    handleValueChange: handleAddressChange,
    handleValueBlurChange: handleAddressBlurChange,
  } = useInput((v) => v.trim() !== "");

  const {
    value: phone,
    valueIsTouched: phoneIsTouched,
    valueIsValid: phoneIsValid,
    handleValueChange: handlePhoneChange,
    handleValueBlurChange: handlePhoneBlurChange,
  } = useInput((v) => v.length <= 10);

  const {
    value: password,
    valueIsTouched: passwordIsTouched,
    valueIsValid: passwordIsValid,
    handleValueChange: handlePasswordChange,
    handleValueBlurChange: handlePasswordBlurChange,
  } = useInput((v) => v.length > 5);
  const {
    value: confirmPassword,
    valueIsTouched: confirmpasswordIsTouched,
    valueIsValid: confirmpasswordIsValid,
    handleValueChange: handleConfirmPasswordChange,
    handleValueBlurChange: handleConfirmPasswordBlurChange,
  } = useInput((v) => v.length > 5);

  let confirmPasswordIsTruelyValid =
    confirmpasswordIsValid && confirmPassword === password;

  const {
    value: email,
    valueIsTouched: emailIsTouched,
    valueIsValid: emailIsValid,
    handleValueChange: handleEmailChange,
    handleValueBlurChange: handleEmailBlurChange,
  } = useInput((v) => v.trim() !== "" && v.includes() === "@");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      !nameIsValid &&
      !addressIsValid &&
      !phoneIsValid &&
      !passwordIsValid &&
      !confirmPasswordIsTruelyValid &&
      !nameIsTouched &&
      !addressIsTouched &&
      !phoneIsTouched &&
      !passwordIsTouched &&
      !confirmpasswordIsTouched
    )
      alert("EMPTY FORM CANNOT BE SUBMITTED");
    else {
      dispatch(signUpHandler({ email, password }));
      // console.log(loginState);
    }
  };
  return (
    <form className="loginForm" onSubmit={handleFormSubmit}>
      <label>Name</label>
      <input
        type="text"
        className={`${!nameIsValid && nameIsTouched && "invalid"}`}
        value={name}
        placeholder="Enter your full name"
        onChange={handleNameChange}
        onBlur={handleNameBlurChange}
      />
      {!nameIsValid && nameIsTouched && <p>Name Cannot be Empty</p>}
      <label>Email</label>
      <input
        className={`${emailIsTouched && !emailIsValid && "invalid"}`}
        type="text"
        value={email}
        placeholder="Username or registered e-mail id"
        onBlur={handleEmailBlurChange}
        onChange={handleEmailChange}
      />
      {!emailIsValid && emailIsTouched && <p>Email cannot be empty</p>}
      <label>Address</label>
      <input
        type="text"
        className={`${!addressIsValid && addressIsTouched && "invalid"}`}
        value={address}
        placeholder="Enter your Address"
        onChange={handleAddressChange}
        onBlur={handleAddressBlurChange}
      />
      {!addressIsValid && addressIsTouched && <p>Address Cannot be Empty</p>}
      <label>Phone Number</label>
      <input
        type="tel"
        className={`${!phoneIsValid && phoneIsTouched && "invalid"}`}
        value={phone}
        placeholder="Register your number"
        onChange={handlePhoneChange}
        onBlur={handlePhoneBlurChange}
      />
      {!phoneIsValid && phoneIsTouched && (
        <p>Phone Number Should be less than or equal to 10 digits</p>
      )}
      <label>Password</label>
      <input
        type="password"
        className={`${!passwordIsValid && passwordIsTouched && "invalid"}`}
        value={password}
        placeholder="Set a new password"
        onChange={handlePasswordChange}
        onBlur={handlePasswordBlurChange}
      />
      {!passwordIsValid && passwordIsTouched && (
        <p>Password should be more than 5 characters</p>
      )}
      <label>Confirm Password</label>
      <input
        type="password"
        className={`${
          !confirmPasswordIsTruelyValid && confirmpasswordIsTouched && "invalid"
        }`}
        value={confirmPassword}
        placeholder="Set a new password"
        onChange={handleConfirmPasswordChange}
        onBlur={handleConfirmPasswordBlurChange}
      />
      {!confirmPasswordIsTruelyValid && confirmpasswordIsTouched && (
        <p>Password should be more than 5 characters and should match</p>
      )}
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignUp;
