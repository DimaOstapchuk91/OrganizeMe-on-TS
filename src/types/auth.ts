import { RootState } from '../redux/store';

// Operations Types and Interfaces
export interface UserData {
  name: string;
  email: string;
  password: string;
}

export interface RejectValue {
  message: string;
}

export interface AuthResponse {
  token: string;
  user: Omit<UserData, 'password'>;
}

export interface ThunkConfig {
  state: RootState;
  rejectValue: RejectValue;
}

export type RegisterPayload = UserData;

export type LoginPayload = Omit<UserData, 'name'>;

export type UserResponse = Omit<UserData, 'password'>;

// Slice State Interface
interface UserState {
  name: string | null;
  email: string | null;
}

export interface AuthState {
  user: UserState;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  error: boolean;
}
