import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const PodcastItem = () => {
  return (
    <div className='tw-overflow-hidden tw-rounded-[1rem] tw-w-72 tw-bg-lighter-background tw-cursor-pointer tw-mx-7 tw-mt-5 md:tw-m-5 lg:tw-m-8'>
      <div className='tw-h-52 tw-w-full'>
        <img
          src='https://d258zg1zfzxoto.cloudfront.net/static-images/latest-podcast.png'
          className='tw-w-full tw-h-full tw-object-cover'
          alt='podcast'
        />
      </div>
      <div className='tw-p-5 md:tw-border-b-2 md:tw-border-background tw-text-justify'>
        <Typography className='tw-text-base tw-mb-2 tw-hidden md:tw-block'>Wednesday, October 25, 2023</Typography>
        <Typography className='tw-text-xl tw-font-bold'>Butt Stuff Butt Stuff Butt Stuff Butt Stuff</Typography>
        <Typography className='tw-text-base tw-font-light tw-mt-4 tw-hidden md:tw-block'>
          How the myth of the perfectly normal butt was born and how it haunts our dressing rooms today.
        </Typography>
      </div>
      <Button
        variant='contained'
        size='medium'
        startIcon={<PlayCircleIcon className='tw-text-[32px] tw-text-primary' />}
        className='tw-btn tw-btn-outline-default tw-bg-lighter-background tw-text-primary tw-border-none
                    tw-mb-4 tw-mr-2 md:tw-m-4 tw-rounded-[20px] tw-text-base tw-shadow-none tw-float-right'
      >
        Listen
      </Button>
    </div>
  );
};

export default PodcastItem;
