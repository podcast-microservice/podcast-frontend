import { zodResolver } from '@hookform/resolvers/zod';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import cx from 'classnames';
import { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import { RegisterContext } from '../../context';
import { RegisterContextType } from '../../models/registerContext';
import { RegisterStep1Payload } from '../../models/requestModel';

interface IProps {
  /**
   * Specify function to go to next step in RegisterStep1
   */
  onGoToNextStep: () => void;
}

const FormSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6)
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Confirm password doesn't match",
    path: ['confirmPassword']
  });

const RegisterStep1 = ({ onGoToNextStep }: IProps) => {
  const { registerField, setRegisterField } = useContext(RegisterContext) as RegisterContextType;
  const { handleSubmit, control } = useForm<RegisterStep1Payload>({
    defaultValues: registerField,
    resolver: zodResolver(FormSchema)
  });

  const onSubmitRegisterStep1 = (formData: RegisterStep1Payload) => {
    console.log(formData);
    setRegisterField({ ...registerField, ...formData });
    onGoToNextStep();
  };

  return (
    <form className='tw-grid tw-gap-3 tw-mt-3' onSubmit={handleSubmit(onSubmitRegisterStep1)}>
      <div className='tw-flex tw-items-center tw-mb-4'>
        <Typography>Already have an account?</Typography>
        <Link to='/login' className='tw-text-primary tw-ml-1'>
          Login
        </Link>
      </div>
      {/* <Button variant='contained' size='large' className='tw-btn tw-btn-outline-default tw-w-56 tw-h-11'>
        <img src={googleIcon} alt='google-icon' className='tw-h-3.5 tw-w-3.5' />
        <Typography className='tw-ml-2'>Register with google</Typography>
      </Button>
      <Typography className='tw-text-sm'>or</Typography> */}
      <Controller
        name='email'
        control={control}
        render={({ field, fieldState }) => {
          const inputClass = cx('tw-input tw-mt-1', fieldState.error && 'tw-input-invalid');
          return (
            <div>
              <TextField
                label='Email Address'
                variant='outlined'
                className={inputClass}
                size='small'
                required
                {...field}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='start'>
                      <MailOutlineOutlinedIcon className='tw-text-[20px]' />
                    </InputAdornment>
                  )
                }}
              />
              {fieldState.error && (
                <Typography className='tw-text-red-500 tw-text-sm tw-mt-1'>{fieldState.error.message}</Typography>
              )}
            </div>
          );
        }}
      />
      <Controller
        name='password'
        control={control}
        render={({ field, fieldState }) => {
          const inputClass = cx('tw-input tw-mt-1', fieldState.error && 'tw-input-invalid');
          return (
            <div>
              <TextField
                label='Password'
                variant='outlined'
                className={inputClass}
                size='small'
                required
                type='password'
                {...field}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='start'>
                      <VisibilityOffIcon className='tw-text-[20px]' />
                    </InputAdornment>
                  )
                }}
              />
              {fieldState.error && (
                <Typography className='tw-text-red-500 tw-text-sm tw-mt-1'>{fieldState.error.message}</Typography>
              )}
            </div>
          );
        }}
      />
      <Controller
        name='confirmPassword'
        control={control}
        render={({ field, fieldState }) => {
          const inputClass = cx('tw-input tw-mt-1', fieldState.error && 'tw-input-invalid');
          return (
            <div>
              <TextField
                label='Confirm Password'
                variant='outlined'
                className={inputClass}
                size='small'
                required
                type='password'
                {...field}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='start'>
                      <VisibilityOffIcon className='tw-text-[20px] tw-text-border' />
                    </InputAdornment>
                  )
                }}
              />
              {fieldState.error && (
                <Typography className='tw-text-red-500 tw-text-sm tw-mt-1'>{fieldState.error.message}</Typography>
              )}
            </div>
          );
        }}
      />
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
    </form>
  );
};

export default RegisterStep1;
