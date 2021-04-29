const registeredValidator = (
  array: string[],
  stringToValidate: string
): boolean => {
  if (array.includes(stringToValidate)) return false;
  else return true;
};

export default registeredValidator;
