export const inputValidator = (
  input: string,
  fieldName: string
): Error | void => {
  if (!input) throw new Error(`${fieldName} field is empty.`);
};
