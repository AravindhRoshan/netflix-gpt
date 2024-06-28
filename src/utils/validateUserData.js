export const validateUserData = (
  emailAddress,
  password,
  passwordCheck,
  isLogin,
  setEmailError,
  setPasswordError
) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const isEmailValid = emailRegex.test(emailAddress);
  const isPasswordValid = passwordRegex.test(password);
  if (!isEmailValid) {
    setEmailError(true);
    return "Enter a valid Email ID";
  }
  if (!isPasswordValid) {
    setPasswordError(true);
    if (password.length < 8) {
      return "Password is too short";
    } else if (!/[A-Z]/.test(password)) {
      return "Password should contain at least one uppercase letter";
    } else if (!/[a-z]/.test(password)) {
      return "Password should contain at least one lowercase letter";
    } else if (!/[0-9]/.test(password)) {
      return "Password should contain at least one digit";
    } else if (!/[!@#$%^&*]/.test(password)) {
      return "Password should contain at least one special character";
    } else {
      return null;
    }
  }
  return !isLogin
    ? password === passwordCheck
      ? null
      : "Password Mismatch"
    : null;
  return null;
};
