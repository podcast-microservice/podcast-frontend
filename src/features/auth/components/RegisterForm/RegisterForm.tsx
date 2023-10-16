import Typography from '@mui/material/Typography';
import RegisterStep1 from './RegisterStep1';
import RegisterStep2 from './RegisterStep2';
import { useFormStep } from '../../hooks/useFormStep';

const RegisterForm = () => {
  const { currentStep, goToNextStep, backToPreviousStep } = useFormStep(2);
  return (
    <div className='tw-h-[80%] tw-w-11/12 sm:tw-h-[85%] sm:tw-w-9/12 tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-rounded-xl sm:tw-rounded-2xl lg:tw-rounded-3xl tw-overflow-hidden'>
      <div className='tw-bg-background tw-px-12 tw-flex tw-items-center'>
        <div className='tw-w-full'>
          <Typography className='tw-text-2xl'>Register</Typography>
          {currentStep === 1 && <RegisterStep1 onGoToNextStep={goToNextStep} />}
          {currentStep === 2 && <RegisterStep2 onBackToPreviousStep={backToPreviousStep} />}
        </div>
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
