export type User = {
  id: string;
  name: string;
  nickname: string;
  email: string;
  password: string;
};

export type UserInputDTO = {
  name: string;
  nickname: string;
  email: string;
  password: string;
};

export type SignInInputDTO = {
  email: string;
  password: string;
};
