import * as yup from 'yup';

export const orderFormSchema = yup.object({
  firstName: yup.string().required('First Name field is required'),
  lastName: yup.string().required('Last Name field is required'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email field is required'),
  streetAddress: yup.string().required('street address field is required'),
  city: yup.string().required('city field is required'),
});
