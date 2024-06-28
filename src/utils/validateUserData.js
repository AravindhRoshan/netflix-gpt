export const validateUserData = (
  emailAddress,
  password,
  passwordCheck,
  isLogin,
  setEmailError,
  setPasswordError
) => {
  if (emailAddress === "") {
    setEmailError("Enter Email ID");
    return;
  }
  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const isEmailValid = emailRegex.test(emailAddress);
  const isPasswordValid = passwordRegex.test(password);
  if (!isEmailValid) {
    setEmailError("Enter a valid Email ID");
    return
  } else setEmailError(null);
  if (password === "" ) {
    setPasswordError("Enter Password");
    return;
  }
  if (!isPasswordValid) {
    if (password.length < 8) {
      setPasswordError("Password is too short");
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError("Password should contain at least one uppercase letter");
    } else if (!/[a-z]/.test(password)) {
      setPasswordError("Password should contain at least one lowercase letter");
    } else if (!/[0-9]/.test(password)) {
      setPasswordError("Password should contain at least one digit");
    } else if (!/[!@#$%^&*]/.test(password)) {
      setPasswordError(
        "Password should contain at least one special character"
      );
    }
  } else setPasswordError(null);
  if (!isLogin)
    if (password !== passwordCheck) setPasswordError("Password Mismatch");
};
