export interface UserData {
  name: string;
  email: string;
  password: string;
}

export type UserProfile = Omit<UserData, 'password'>;
