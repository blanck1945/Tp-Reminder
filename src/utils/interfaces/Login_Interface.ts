export interface User {
  id: number;
  username: string;
  role: string;
}

export interface LoginReducer {
  user: User;
  token: number;
}
