export const inputValidator = (input: string, fieldName: string) => {
  if (!input) throw new Error(`${fieldName} field is empty.`);
};
