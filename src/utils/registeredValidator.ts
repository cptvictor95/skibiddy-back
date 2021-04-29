export const registeredValidator = (
  array: string[],
  stringToValidate: string,
  fieldName: string
): Error | void => {
  if (array.includes(stringToValidate))
    throw new Error(`${fieldName} already registered.`);
};
