import { Button, TextInput, Textarea } from 'components/Base';
import { ContactSchema, useContactForm } from './types';
import { sendMessage } from '@/api/api';
import { useState } from 'react';
import { RxDoubleArrowRight } from 'react-icons/rx';

export const ContactForm: React.FC = () => {
  // const reCaptchaRef = useRef<any>();
  const [isLoading, setLoading] = useState(false);

  const { reset, register, handleSubmit, formState } = useContactForm();
  const { errors } = formState;

  async function onSubmit(data: ContactSchema) {
    try {
      setLoading(true);
      await sendMessage(data);
      alert('Message sent successfully');
    } catch (error) {
      alert('Something went wrong!');
    } finally {
      setLoading(false);
      reset({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
    }
  }

  return (
    // !important: use `noValidate` to disable default html validation
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="flex flex-col space-y-9">
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 xl:grid-cols-2">
          <TextInput
            required
            name="firstName"
            label="First name"
            placeholder="First name"
            {...register('firstName')}
            error={errors?.firstName?.message}
          />
          <TextInput
            required
            name="lastName"
            label="Last name"
            placeholder="Last name"
            {...register('lastName')}
            error={errors?.lastName?.message}
          />
          <TextInput
            required
            name="email"
            type="email"
            label="Email"
            placeholder="Email"
            {...register('email')}
            error={errors?.email?.message}
          />
          <TextInput
            required
            name="phone"
            label="Phone number"
            placeholder="Phone number"
            {...register('phone')}
            error={errors?.phone?.message}
          />
          <TextInput
            required
            name="subject"
            label="Subject"
            placeholder="Subject"
            className="xl:col-span-2"
            {...register('subject')}
            error={errors?.subject?.message}
          />
          <Textarea
            rows={6}
            required
            name="message"
            label="Message"
            className="xl:col-span-2"
            placeholder="Write your message here..."
            {...register('message')}
            error={errors?.message?.message}
          />
        </div>
        <Button
          size="lg"
          type="submit"
          intent="secondary"
          loading={isLoading}
          className="self-center"
          right={
            isLoading ? undefined : (
              <div className="ml-3 rounded-full bg-orange p-1 transition-colors duration-300 ease-in-out group-hover:bg-blue">
                <RxDoubleArrowRight />
              </div>
            )
          }
        >
          {isLoading ? 'Sending' : 'Send Message'}
        </Button>
      </div>
    </form>
  );
};
