export const passwordValidator = (password: string): Error | void => {
  if (password.length < 6) throw new Error('Password is too short.');
  if (password.length > 32) throw new Error('Password is too long.');
};
