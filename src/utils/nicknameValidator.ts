const nicknameValidator = (
  nicknames: string[],
  nicknameToValidate: string
): boolean => {
  if (nicknames.includes(nicknameToValidate)) return false;
  else return true;
};

export default nicknameValidator;
