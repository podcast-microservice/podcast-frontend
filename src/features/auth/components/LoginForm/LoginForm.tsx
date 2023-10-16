import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import googleIcon from '~/assets/images/google-icon.svg';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className='tw-h-[80%] tw-w-11/12 sm:tw-h-[85%] sm:tw-w-9/12 tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-rounded-xl sm:tw-rounded-2xl lg:tw-rounded-3xl tw-overflow-hidden'>
      <div className='tw-hidden lg:tw-flex tw-bg-illustration tw-items-center'>
        <img
          src='https://d258zg1zfzxoto.cloudfront.net/static-images/login-illustration.png'
          className='tw-w-full'
          alt='Login Image'
        />
      </div>
      <div className='tw-bg-background tw-px-[10%] tw-flex tw-items-center tw-text-center'>
        <form className='tw-w-full tw-grid tw-gap-4'>
          <Typography className='tw-text-2xl'>Login</Typography>
          <Button variant='contained' size='large' className='tw-btn tw-btn-outline-default tw-mx-auto tw-h-11'>
            <img src={googleIcon} alt='google-icon' className='tw-h-3.5 tw-w-3.5' />
            <Typography className='tw-mx-2'>Login with google</Typography>
          </Button>
          <Typography className='tw-text-sm'>or</Typography>
          <div>
            <TextField
              label='Email Address'
              variant='outlined'
              className='tw-input'
              size='small'
              id='email'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <MailOutlineOutlinedIcon className='tw-text-[20px] tw-text-border' />
                  </InputAdornment>
                )
              }}
            />
            <Typography className='tw-text-red-500 tw-text-sm tw-mt-1 tw-text-left'>invalid email</Typography>
          </div>
          <div>
            <TextField
              label='Password'
              variant='outlined'
              className='tw-input'
              size='small'
              id='password'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <VisibilityOffIcon className='tw-text-[20px] tw-text-border' />
                  </InputAdornment>
                )
              }}
            />
            <Typography className='tw-text-red-500 tw-text-sm tw-mt-1 tw-text-left'>invalid password</Typography>
          </div>
          <div className='tw-flex tw-items-center'>
            <Typography className='text'>Does not have any account?</Typography>
            <Link to='/register' className='tw-text-primary tw-ml-1'>
              Register
            </Link>
          </div>
          <Button
            type='submit'
            variant='contained'
            size='large'
            className='tw-btn tw-btn-primary tw-text-black tw-mx-auto tw-mt-2 tw-w-24 tw-h-11'
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
