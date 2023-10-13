import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import googleIcon from '~/assets/images/google-icon.svg';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

import cx from 'classnames';

interface IProps {
  /**
   * Specify value to show RegisterStep1 or not
   */
  isShow: boolean;
}

const RegisterStep1 = ({ isShow = false }: IProps) => {
  const sectionClass = cx('tw-grid tw-gap-2 tw-mt-2', !isShow && 'tw-hidden');
  return (
    <section className={sectionClass}>
      <div className='tw-flex tw-items-center'>
        <Typography>Already have an account?</Typography>
        <Link to='/login' className='tw-text-primary tw-ml-1'>
          Login
        </Link>
      </div>
      <Button variant='contained' size='large' className='tw-btn tw-btn-outline-default tw-w-56 tw-h-11'>
        <img src={googleIcon} alt='google-icon' className='tw-h-3.5 tw-w-3.5' />
        <Typography className='tw-ml-2'>Register with google</Typography>
      </Button>
      <Typography className='tw-text-sm'>or</Typography>
      <div>
        <Typography>Email Address</Typography>
        <TextField
          placeholder='enter your email'
          variant='outlined'
          className='tw-input tw-mt-1'
          size='small'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <MailOutlineOutlinedIcon className='tw-text-[20px] tw-text-border' />
              </InputAdornment>
            )
          }}
        />
        <Typography className='tw-text-red-500 tw-text-sm tw-mt-1'>invalid email</Typography>
      </div>
      <div>
        <Typography>Password</Typography>
        <TextField
          placeholder='password'
          variant='outlined'
          className='tw-input tw-mt-1'
          size='small'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <VisibilityOffIcon className='tw-text-[20px] tw-text-border' />
              </InputAdornment>
            )
          }}
        />
        <Typography className='tw-text-red-500 tw-text-sm tw-mt-1'>invalid password</Typography>
      </div>
      <div>
        <Typography>Confirm Password</Typography>
        <TextField
          placeholder='password'
          variant='outlined'
          className='tw-input tw-mt-1'
          size='small'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <VisibilityOffIcon className='tw-text-[20px] tw-text-border' />
              </InputAdornment>
            )
          }}
        />
        <Typography className='tw-text-red-500 tw-text-sm tw-mt-1'>invalid password</Typography>
      </div>
      <div className='tw-flex tw-flex-row tw-items-center tw-justify-between tw-mt-1'>
        <Typography>
          Step <Typography className='tw-text-primary tw-inline'>1</Typography> of 2
        </Typography>
        <Button
          type='button'
          variant='contained'
          size='large'
          className='tw-btn tw-btn-primary tw-text-black tw-w-24 tw-h-11'
        >
          Next
        </Button>
      </div>
    </section>
  );
};

export default RegisterStep1;
