import Box from '@mui/material/Box';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import MailIcon from '@mui/icons-material/Mail';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PersonIcon from '@mui/icons-material/Person';
import VolumeUp from '@mui/icons-material/VolumeUp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import googleIcon from '~/assets/images/google-icon.svg';
import ButtonFileUpload from '~/shared/components/ui/ButtonFileUpload';
import IconRound from '~/shared/components/ui/IconRound';
import VolumeSlider from '~/shared/components/ui/VolumeSlider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Rating from '@mui/material/Rating';
import Switch from '@mui/material/Switch';
import Avatar from '@mui/material/Avatar';
import abbreviateName from '~/shared/utils/helpers/abbreviateName';
import Badge from '@mui/material/Badge';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Chip from '@mui/material/Chip';
import { useNavigate } from 'react-router-dom';

const BasicComponent = () => {
  const navigate = useNavigate();
  return (
    <Box className='tw-py-6'>
      <div className='tw-flex tw-flex-row tw-items-center tw-justify-between'>
        <Typography className='tw-text-2xl'>Basic Component</Typography>
        <Button
          onClick={() => {
            navigate('complex');
          }}
          variant='contained'
          size='large'
          className='tw-btn tw-btn-primary tw-text-black tw-ml-2'
        >
          Go To Complex Component
        </Button>
      </div>
      <div className='tw-flex tw-flex-row tw-items-center tw-mt-8'>
        <Typography className='tw-mr-2'>Email Header: </Typography>
        <div className='tw-flex tw-flex-row tw-items-center tw-justify-center'>
          <MailIcon className='tw-text-[20px] tw-text-primary tw-ml-2' />
          <Typography className='tw-text-sm tw-leading-[0] tw-ml-1 tw-font-bold'>Email:</Typography>
          <Typography className='tw-text-sm tw-leading-[0] tw-ml-1 tw-text-border'>
            trantrinhhieu2908@gmail.com
          </Typography>
        </div>
      </div>
      <div className='tw-flex tw-flex-row tw-items-center tw-mt-8'>
        <Typography className='tw-mr-2'>Badge: </Typography>
        <Badge badgeContent={4} color='info'>
          <NotificationsNoneOutlinedIcon className='tw-text-foreground' />
        </Badge>
        <Badge badgeContent={10} className='tw-badge tw-ml-4'>
          <NotificationsNoneOutlinedIcon className='tw-text-foreground' />
        </Badge>
      </div>
      <div className='tw-flex tw-flex-row tw-items-center tw-mt-8'>
        <Typography className='tw-mr-2'>Avartar: </Typography>
        <Avatar alt='test avatar' src='https://i.pravatar.cc/300' />
        <Avatar className='tw-ml-2 tw-font-bold tw-text-background tw-bg-primary' alt='test avatar word'>
          {abbreviateName('Trinh Hieu')}
        </Avatar>
      </div>
      <div className='tw-flex tw-flex-row tw-items-center tw-mt-8'>
        <Typography className='tw-mr-2'>Icon Round: </Typography>
        <IconRound
          icon={<PersonIcon className='tw-text-[20px] tw-text-background' />}
          backgroundColor='primary'
          className='tw-ml-2'
          hasRing
        />
        <IconRound
          icon={<FacebookOutlinedIcon className='tw-text-[20px] tw-text-background' />}
          backgroundColor='foreground'
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
        <ButtonFileUpload
          nameContent='Upload Image'
          size='large'
          className='tw-btn tw-btn-primary tw-text-black tw-ml-2'
        />
        <Button variant='contained' size='large' className='tw-btn tw-btn-outline-default tw-ml-2'>
          <img src={googleIcon} alt='' className='tw-h-3.5 tw-w-3.5' />
          <Typography className='tw-ml-2'>Login with google</Typography>
        </Button>
        <Button
          variant='contained'
          size='medium'
          className='tw-btn tw-btn-primary tw-text-black tw-rounded-full tw-px-8 tw-ml-2'
        >
          Enroll
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
          <Typography className='tw-mr-2'>Checkbox: </Typography>
          <Checkbox className='tw-checkbox' />
          <FormControlLabel required control={<Checkbox className='tw-checkbox' />} label='Required Checkbox' />
        </div>
      </div>
      <div className='tw-grid tw-grid-cols-2 tw-mt-8'>
        <div className='tw-flex tw-flex-row tw-items-center'>
          <Typography className='tw-mr-2'>Switch: </Typography>
          <Switch className='tw-switch' />
          <FormControlLabel control={<Switch className='tw-switch' />} label='Switch With Label' />
        </div>
      </div>
      <div className='tw-grid tw-grid-cols-2 tw-mt-8'>
        <div className='tw-flex tw-flex-row tw-items-center'>
          <Typography className='tw-mr-2'>Chip: </Typography>
          <Chip
            onClick={() => {
              console.log('ok');
            }}
            label='Chip Filled'
            className='tw-bg-primary tw-text-background'
          />
          <Chip label='Chip Outlined' variant='outlined' className='tw-border-primary tw-text-primary tw-ml-2' />
        </div>
      </div>
      <div className='tw-grid tw-grid-cols-2 tw-mt-8'>
        <div className='tw-flex tw-flex-row tw-items-center'>
          <Typography className='tw-mr-2'>Volume: </Typography>
          <VolumeUp className='tw-text-foreground' />
          <VolumeSlider className='tw-ml-2 tw-text-primary tw-w-32' />
        </div>
      </div>
      <div className='tw-grid tw-grid-cols-2 tw-mt-8'>
        <div className='tw-flex tw-flex-row tw-items-center'>
          <Typography className='tw-mr-2'>Rating: </Typography>
          <Rating name='no-value' value={null} className='tw-rating' />
        </div>
      </div>
    </Box>
  );
};

export default BasicComponent;
