import { RegisterForm, RegisterProvider } from '~/features/auth';

const RegisterPage = () => {
  return (
    <div className='tw-h-[calc(100vh-5rem)] tw-flex tw-justify-center tw-items-center tw-bg-gradient'>
      <RegisterProvider>
        <RegisterForm />
      </RegisterProvider>
    </div>
  );
};

export default RegisterPage;
