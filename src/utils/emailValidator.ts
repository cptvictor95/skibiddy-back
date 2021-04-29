export const emailValidator = (email: string): Error | void => {
  if (!email.includes('@')) throw new Error('Invalid email.');
};
