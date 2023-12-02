import Logo from '../Logo';
import Typography from '@mui/material/Typography';
import IconRound from '../ui/IconRound';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SpotifyIcon from '../Icon/SpotifyIcon';
import SoundCloudIcon from '../Icon/SoundCloudIcon';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='tw-bg-footer'>
      <div className='tw-relative tw-h-72 tw-border-b tw-border-background/70'>
        <Logo className='tw-absolute tw-top-1/2 tw-left-1/2 tw-transform -tw-translate-x-1/2 -tw-translate-y-1/2 tw-scale-[4] tw-opacity-10 tw-z-0' />
        <div className='tw-h-full tw-flex tw-flex-col tw-items-center tw-justify-center tw-relative tw-z-10'>
          <div className='tw-flex tw-flex-col tw-items-center tw-justify-center'>
            <Logo className='tw-scale-75' />
            <div className='tw-flex tw-flex-row tw-items-center tw-justify-center'>
              <Typography className='tw-text-xl tw-text-white tw-font-bold'>Psych</Typography>
              <Typography className='tw-text-xl tw-text-primary tw-font-bold'>ology</Typography>
            </div>
          </div>
          <div className='tw-flex tw-flex-row tw-items-center tw-justify-center tw-mt-5'>
            <Typography className='tw-text-sm tw-text-white tw-text-center tw-w-[460px]'>
              Helps you understand more about psychology, have a comprehensive view of life and help people around you
            </Typography>
          </div>
          <div className='tw-flex tw-flex-row tw-items-center tw-justify-center tw-mt-7'>
            <IconRound
              icon={<FacebookOutlinedIcon className='tw-text-[20px] tw-text-black' />}
              backgroundColor='white'
            />
            <Link to='https://www.youtube.com/watch?v=yptflB597IQ' target='_blank'>
              <IconRound
                icon={<YouTubeIcon className='tw-text-[20px] tw-text-black' />}
                backgroundColor='white'
                className='tw-ml-3'
              />
            </Link>
            <IconRound
              icon={<SpotifyIcon className='tw-text-[20px] tw-text-black' />}
              backgroundColor='white'
              className='tw-ml-3'
            />
            <IconRound
              icon={<SoundCloudIcon className='tw-text-[20px] tw-text-black' />}
              backgroundColor='white'
              className='tw-ml-3'
            />
          </div>
        </div>
      </div>
      <div className='tw-h-12 tw-border-b'></div>
    </footer>
  );
};

export default Footer;
