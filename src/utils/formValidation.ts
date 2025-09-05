import * as Yup from 'yup';
import {
  ContactFormPayload,
  LoginPayload,
  RegisterPayload,
} from './utils.types';

const emailValid = Yup.string()
  .email('Invalid email format')
  .min(3, 'Minimum 3 characters')
  .max(50, 'Maximum 50 characters')
  .required('Must be filled');

const passwordValid = Yup.string()
  .min(3, 'Minimum 3 characters')
  .max(50, 'Maximum 50 characters')
  .required('Password is required');

const nameValid = Yup.string()
  .min(3, 'Minimum 3 characters')
  .max(50, 'Maximum 50 characters')
  .required('Name is required');

const namberValid = Yup.string()
  .matches(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number')
  .min(3, 'Minimum 3 digits')
  .max(50, 'Maximum 50 digits')
  .required('Must be filled');

export const orderSchemaLogin: Yup.ObjectSchema<LoginPayload> = Yup.object({
  email: emailValid.defined(),
  password: passwordValid.defined(),
});

export const orderSchemaReg: Yup.ObjectSchema<RegisterPayload> = Yup.object({
  name: nameValid,
  email: emailValid,
  password: passwordValid,
});

export const orderSchemaContact: Yup.ObjectSchema<ContactFormPayload> =
  Yup.object({
    name: nameValid,
    number: namberValid,
  });

// type Person = Yup.InferType<typeof orderSchemaLogin>;
