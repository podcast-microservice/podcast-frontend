import Typography from '@mui/material/Typography';
import RegisterStep1 from './RegisterStep1';

const RegisterForm = () => {
  return (
    <div className='tw-h-[85%] tw-w-9/12 tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-rounded-3xl tw-overflow-hidden'>
      <div className='tw-bg-background tw-px-14 tw-flex tw-items-center'>
        <form className='tw-w-full'>
          <Typography className='tw-text-2xl'>Register</Typography>
          <RegisterStep1 isShow />
        </form>
      </div>
      <div className='tw-hidden lg:tw-flex tw-bg-illustration tw-items-center'>
        <img
          src='https://d258zg1zfzxoto.cloudfront.net/static-images/login-illustration.png'
          className='tw-w-full'
          alt='Register Image'
        />
      </div>
    </div>
  );
};

export default RegisterForm;
