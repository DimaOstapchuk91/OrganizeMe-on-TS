import { UserData } from '../../types/user.types';

// Operations Types and Interfaces

export interface AuthResponse {
  token: string;
  user: Omit<UserData, 'password'>;
}

export type RegisterPayload = UserData;

export type LoginPayload = Pick<UserData, 'email' | 'password'>;

export type UserResponse = Pick<UserData, 'name' | 'email'>;

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
