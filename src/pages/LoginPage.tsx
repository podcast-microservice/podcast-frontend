import { LoginForm } from '../features/auth/components/LoginForm';

const LoginPage = () => {
  return (
    <div className='tw-h-[calc(100vh-5rem)] tw-flex tw-justify-center tw-items-center tw-bg-gradient'>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
