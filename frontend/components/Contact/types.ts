import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export interface ContactSchema {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const contactSchema = yup.object().shape({
  firstName: yup.string().required().label('First name'),
  lastName: yup.string().required().label('Last name'),
  email: yup.string().email().required().label('Email'),
  phone: yup.string().required().label('Phone number'),
  subject: yup.string().required().label('Subject'),
  message: yup.string().required().label('Message')
  // captchaToken: yup.string().required().label('Captcha Token')
});

export const useContactForm = () =>
  useForm<ContactSchema>({ resolver: yupResolver(contactSchema) });
