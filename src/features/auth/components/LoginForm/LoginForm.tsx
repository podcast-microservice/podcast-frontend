import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import googleIcon from '~/assets/images/google-icon.svg';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
const LoginForm = () => {
  return (
    <div className='tw-grid tw-grid-cols-1 md:tw-grid-cols-2 md:tw-mx-10 md:tw-gap-x-1 tw-max-w-7xl'>
      <div className='tw-hidden md:tw-block'>
        <img
          src='https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg'
          className='tw-w-full'
          alt='Login Image'
        />
      </div>
      <div className=' tw-bg-green-800 tw-w-full tw-flex tw-justify-center tw-flex-col tw-p-10 tw-text-center'>
        <Typography className='tw-text-2xl tw-mb-4'>Login</Typography>
        <Button variant='contained' size='large' className='tw-btn tw-btn-outline-default tw-mx-auto'>
          <img src={googleIcon} alt='' className='tw-h-3.5 tw-w-3.5' />
          <Typography className='tw-mx-2'>Login with google</Typography>
        </Button>
        <Typography className='tw-text-sm tw-my-5'>or</Typography>
        <label htmlFor='' className='tw-text-left tw-mb-2'>
          <Typography className='text'>Email Address</Typography>
        </label>
        <TextField
          placeholder='enter your email'
          variant='outlined'
          className='tw-input tw-mb-5'
          size='small'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <MailOutlineOutlinedIcon className='tw-text-[20px] tw-text-border' />
              </InputAdornment>
            )
          }}
        />
        <label htmlFor='' className='tw-text-left tw-mb-2'>
          <Typography className='text'>Password</Typography>
        </label>
        <TextField
          placeholder='password'
          variant='outlined'
          className='tw-input tw-mb-5'
          size='small'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <VisibilityOffIcon className='tw-text-[20px] tw-text-border' />
              </InputAdornment>
            )
          }}
        />
        <div className='tw-flex'>
          <Typography className='text tw-mr-1'>Does not have any account?</Typography>
          <a href=''>Register</a>
        </div>
        <Button variant='contained' size='large' className='tw-btn tw-btn-primary tw-text-black'>
          Primary
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
