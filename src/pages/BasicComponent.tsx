import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import VolumeUp from '@mui/icons-material/VolumeUp';
import ButtonFileUpload from '~/shared/components/ui/ButtonFileUpload';
import VolumeSlider from '~/shared/components/ui/VolumeSlider';
import IconRound from '~/shared/components/ui/IconRound';
import Logo from '~/shared/components/Logo';
import { routes } from '~/routes';
import PersonIcon from '@mui/icons-material/Person';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MailIcon from '@mui/icons-material/Mail';
import googleIcon from '~/assets/images/google-icon.svg';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import InputAdornment from '@mui/material/InputAdornment';

const BasicComponent = () => {
  return (
    <div className='tw-h-screen tw-bg-background tw-p-5'>
      <Typography className='tw-text-2xl'>Basic Component</Typography>
      <div className='tw-flex tw-flex-row tw-items-center tw-mt-8'>
        <Typography className='tw-mr-2'>Logo: </Typography>
        <Link to={routes.homePath} className='tw-flex tw-flex-row tw-items-center'>
          <Logo />
          <Typography className='tw-text-2xl tw-ml-2 tw-font-bold'>Psych</Typography>
          <Typography className='tw-text-2xl tw-font-bold tw-text-primary'>ology</Typography>
        </Link>
        <div className='tw-flex tw-flex-row tw-items-center tw-justify-center'>
          <MailIcon className='tw-text-[20px] tw-text-primary tw-ml-2' />
          <Typography className='tw-text-sm tw-leading-[0] tw-ml-1 tw-font-bold'>Email:</Typography>
          <Typography className='tw-text-sm tw-leading-[0] tw-ml-1 tw-text-border'>
            trantrinhhieu2908@gmail.com
          </Typography>
        </div>
      </div>
      <div className='tw-flex tw-flex-row tw-items-center tw-mt-8'>
        <Typography className='tw-mr-2'>Icon Round: </Typography>
        <IconRound
          icon={<PersonIcon className='tw-text-[20px] tw-text-background' />}
          backgroundColor='primary'
          className='tw-ml-2'
          hasDoubleCircle
        />
        <IconRound
          icon={<FacebookOutlinedIcon className='tw-text-[20px] tw-text-background' />}
          backgroundColor='primary'
          className='tw-ml-2'
        />
        <IconRound
          icon={<YouTubeIcon className='tw-text-[20px] tw-text-background' />}
          backgroundColor='primary'
          className='tw-ml-2'
        />
      </div>
      <div className='tw-flex tw-flex-row tw-items-center tw-mt-8'>
        <Typography className='tw-mr-2'>Button: </Typography>
        <Button variant='contained' size='large' className='tw-btn tw-btn-primary tw-text-black'>
          Primary
        </Button>
        <Button variant='contained' size='large' className='tw-btn tw-btn-outline-primary tw-ml-2'>
          Outline Primary
        </Button>
        <Button variant='contained' size='large' className='tw-btn tw-btn-outline-default tw-ml-2'>
          Outline Default
        </Button>
        <ButtonFileUpload name='Upload Image' size='large' className='tw-btn tw-btn-primary tw-text-black tw-ml-2' />
        <Button variant='contained' size='large' className='tw-btn tw-btn-outline-default tw-ml-2'>
          <img src={googleIcon} alt='' />
          <Typography className='tw-ml-2'>Login with google</Typography>
        </Button>
      </div>
      <div className='tw-grid tw-grid-cols-1 tw-mt-8'>
        <div className='tw-flex tw-flex-row tw-items-center'>
          <Typography className='tw-mr-2'>Input: </Typography>
          <TextField label='Outlined' variant='outlined' className='tw-input' size='small' />
          <TextField label='Standard' variant='standard' className='tw-ml-4 tw-input' size='small' />
          <TextField
            placeholder='enter your email'
            variant='outlined'
            className='tw-ml-4 tw-input'
            size='small'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <MailOutlineOutlinedIcon className='tw-text-[20px] tw-text-border' />
                </InputAdornment>
              )
            }}
          />
        </div>
      </div>
      <div className='tw-grid tw-grid-cols-5 tw-mt-8'>
        <div className='tw-flex tw-flex-row tw-items-center'>
          <Typography className='tw-mr-2'>Select: </Typography>
          <FormControl size='small' fullWidth className='tw-input'>
            <InputLabel id='demo-simple-select-label'>Age</InputLabel>
            <Select labelId='demo-simple-select-label' id='demo-simple-select' label='Age'>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className='tw-grid tw-grid-cols-2 tw-mt-8'>
        <div className='tw-flex tw-flex-row tw-items-center'>
          <Typography className='tw-mr-2'>Volume: </Typography>
          <VolumeUp className='tw-text-foreground' />
          <VolumeSlider className='tw-ml-2 tw-text-primary tw-w-32' />
        </div>
      </div>
    </div>
  );
};

export default BasicComponent;
