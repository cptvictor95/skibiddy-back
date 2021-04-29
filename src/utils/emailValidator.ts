const emailValidator = (emails: string[], emailToValidate: string): boolean => {
  if (emails.includes(emailToValidate)) return false;
  else return true;
};

export default emailValidator;
