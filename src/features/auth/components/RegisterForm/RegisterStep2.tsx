import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import cx from 'classnames';

interface IProps {
  /**
   * Specify value to show RegisterStep1 or not
   */
  isShow: boolean;
}

const RegisterStep2 = ({ isShow = false }: IProps) => {
  const sectionClass = cx('tw-grid tw-gap-2 tw-mt-8', !isShow && 'tw-hidden');
  return (
    <section className={sectionClass}>
      <div>
        <TextField label='Full Name' variant='outlined' className='tw-input' size='small' required />
        <Typography className='tw-text-red-500 tw-text-sm tw-mt-1'>invalid full name</Typography>
      </div>
      <div>
        <DatePicker
          label='Date of birth'
          className='tw-input'
          slotProps={{ textField: { size: 'small', required: true } }}
        />
        <Typography className='tw-text-red-500 tw-text-sm tw-mt-1'>invalid date</Typography>
      </div>
      <div>
        <FormControlLabel
          required
          control={<Checkbox className='tw-checkbox' />}
          label='I agree with terms and conditions'
        />
        <Typography className='tw-text-red-500 tw-text-sm tw-mt-1'>you must agree</Typography>
      </div>
      <div className='tw-flex tw-flex-row tw-items-center tw-justify-between tw-mt-1'>
        <Typography>
          Step <span className='tw-text-primary'>2</span> of 2
        </Typography>
        <Button
          type='submit'
          onClick={() => console.log('next')}
          variant='contained'
          size='large'
          className='tw-btn tw-btn-primary tw-text-black tw-w-24 tw-h-11'
        >
          Register
        </Button>
      </div>
    </section>
  );
};

export default RegisterStep2;
