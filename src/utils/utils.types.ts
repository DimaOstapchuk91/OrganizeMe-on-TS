import { ContactData } from '../types/contacts.types';
import { UserData } from '../types/user.types';

// Yup types
export type LoginPayload = Pick<UserData, 'email' | 'password'>;

export type RegisterPayload = UserData;

export type ContactFormPayload = Pick<ContactData, 'name' | 'number'>;
