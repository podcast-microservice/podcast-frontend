import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import cx from 'classnames';
import { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { RegisterContext } from '../../context';
import { RegisterContextType } from '../../models/registerContext';
import { RegisterPayload, RegisterStep2Payload } from '../../models/requestModel';

interface IProps {
  /**
   * Specify function to go to next step in RegisterStep1
   */
  onBackToPreviousStep: () => void;
}

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
  fullName: z.string().min(6),
  phoneNumber: z
    .string()
    .refine((value) => /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(value), 'Phone number must be a vietnam number'),
  isAcceptedCondition: z.boolean(),
  dateOfBirth: z
    .object({
      $d: z.coerce.date().max(new Date())
    })
    .transform((arg) => arg.$d)
});

const RegisterStep2 = ({ onBackToPreviousStep }: IProps) => {
  const { registerField } = useContext(RegisterContext) as RegisterContextType;
  const {
    handleSubmit,
    control,
    formState: { isDirty }
  } = useForm<RegisterStep2Payload>({
    defaultValues: registerField,
    resolver: zodResolver(FormSchema)
  });

  const onSubmitRegisterStep2 = (formData: RegisterStep2Payload) => {
    const registerPayload: RegisterPayload = {
      email: formData.email,
      password: formData.password,
      fullName: formData.fullName,
      phoneNumber: formData.phoneNumber,
      dateOfBirth: formData.dateOfBirth as Date
    };
    // TODO: Call api
    console.log(registerPayload);
  };

  const handleBackToPreviousStep = () => {
    // TODO: handle dirty data
    if (isDirty) {
      console.log('dirty data');
      return;
    }
    onBackToPreviousStep();
  };

  return (
    <form className='tw-grid tw-gap-3 tw-mt-4' onSubmit={handleSubmit(onSubmitRegisterStep2)}>
      <Controller
        name='fullName'
        control={control}
        render={({ field, fieldState }) => {
          const inputClass = cx('tw-input tw-mt-1', fieldState.error && 'tw-input-invalid');
          return (
            <div>
              <TextField label='Full Name' variant='outlined' className={inputClass} size='small' required {...field} />
              {fieldState.error && (
                <Typography className='tw-text-red-500 tw-text-sm tw-mt-1'>{fieldState.error.message}</Typography>
              )}
            </div>
          );
        }}
      />
      <Controller
        name='phoneNumber'
        control={control}
        render={({ field, fieldState }) => {
          const inputClass = cx('tw-input tw-mt-1', fieldState.error && 'tw-input-invalid');
          return (
            <div>
              <TextField
                label='Phone Number'
                variant='outlined'
                className={inputClass}
                size='small'
                required
                {...field}
              />
              {fieldState.error && (
                <Typography className='tw-text-red-500 tw-text-sm tw-mt-1'>{fieldState.error.message}</Typography>
              )}
            </div>
          );
        }}
      />
      <Controller
        name='dateOfBirth'
        control={control}
        render={({ field, fieldState }) => {
          const inputClass = cx('tw-input tw-mt-1', fieldState.error && 'tw-input-invalid');
          return (
            <div>
              <DatePicker
                label='Date of birth'
                className={inputClass}
                slotProps={{ textField: { size: 'small', required: true } }}
                {...field}
              />
              {fieldState.error && (
                <Typography className='tw-text-red-500 tw-text-sm tw-mt-1'>
                  Date of birth must be today or in the past.
                </Typography>
              )}
            </div>
          );
        }}
      />
      <Controller
        name='isAcceptedCondition'
        control={control}
        render={({ field }) => {
          return (
            <FormControlLabel
              required
              control={<Checkbox className='tw-checkbox' />}
              label='I agree with terms and conditions'
              {...field}
            />
          );
        }}
      />
      <div className='tw-flex tw-flex-row tw-items-center tw-justify-between tw-mt-4'>
        <Typography>
          Step <span className='tw-text-primary'>2</span> of 2
        </Typography>
        <div>
          <Button
            type='button'
            onClick={handleBackToPreviousStep}
            variant='contained'
            size='large'
            className='tw-btn tw-btn-outline-default tw-w-20 tw-h-11'
          >
            Back
          </Button>
          <Button
            type='submit'
            variant='contained'
            size='large'
            className='tw-btn tw-btn-primary tw-text-black tw-w-24 tw-h-11 tw-ml-2'
          >
            Register
          </Button>
        </div>
      </div>
    </form>
  );
};

export default RegisterStep2;
