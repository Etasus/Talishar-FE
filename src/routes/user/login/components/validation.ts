import * as yup from 'yup';

export const signUpValidationSchema = yup.object().shape({
  userID: yup
    .string()
    .required('User ID is required')
    .matches(/^[a-zA-Z0-9_]*$/, 'Only alphanumeric characters are allowed'),
  email: yup
    .string()
    .email('Must be a valid email')
    .required('Email is required'),
  password: yup.string().required('Password is required'),
  passwordConfirm: yup
    .string()
    .required('You must confirm your password')
    .oneOf([yup.ref('password'), null], 'Passwords must match')
});

export const forgottenPasswordValidaitonSchema = yup.object().shape({
  email: yup
    .string()
    .email('Must be a valid email')
    .required('Email is required')
});