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
  const sectionClass = cx('tw-grid tw-gap-3 tw-mt-3', !isShow && 'tw-hidden');
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
        <TextField
          label='Email Address'
          variant='outlined'
          className='tw-input tw-mt-1'
          size='small'
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position='start'>
                <MailOutlineOutlinedIcon className='tw-text-[20px]' />
              </InputAdornment>
            )
          }}
        />
        {/* <Typography className='tw-text-red-500 tw-text-sm tw-mt-1'>invalid email</Typography> */}
      </div>
      <div>
        <TextField
          label='Password'
          variant='outlined'
          className='tw-input tw-mt-1'
          size='small'
          InputProps={{
            endAdornment: (
              <InputAdornment position='start'>
                <VisibilityOffIcon className='tw-text-[20px]' />
              </InputAdornment>
            )
          }}
        />
        {/* <Typography className='tw-text-red-500 tw-text-sm tw-mt-1'>invalid password</Typography> */}
      </div>
      <div>
        <TextField
          label='Confirm Password'
          variant='outlined'
          className='tw-input tw-mt-1'
          size='small'
          InputProps={{
            endAdornment: (
              <InputAdornment position='start'>
                <VisibilityOffIcon className='tw-text-[20px] tw-text-border' />
              </InputAdornment>
            )
          }}
        />
        {/* <Typography className='tw-text-red-500 tw-text-sm tw-mt-1'>invalid password</Typography> */}
      </div>
      <div className='tw-flex tw-flex-row tw-items-center tw-justify-between tw-mt-4'>
        <Typography>
          Step <span className='tw-text-primary'>1</span> of 2
        </Typography>
        <Button
          type='submit'
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
