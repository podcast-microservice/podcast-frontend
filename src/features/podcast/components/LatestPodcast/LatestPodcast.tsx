import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const LatestPodcast = () => {
  return (
    <div
      className='tw-h-[calc(90vh-5rem)] tw-bg-illustration tw-flex tw-items-center tw-justify-center
                md:tw-h-[calc(80vh-5rem)]'
    >
      <div
        className='tw-flex tw-items-center tw-justify-between tw-flex-col
                    md:tw-flex-row'
      >
        <div
          className='tw-h-64 tw-w-96 tw-px-10 tw-py-4
                    md:tw-p-4
                    lg:tw-h-72 lg:tw-w-[28rem]'
        >
          <img
            src='https://d258zg1zfzxoto.cloudfront.net/static-images/latest-podcast.png'
            className='tw-w-full tw-h-full tw-object-cover tw-rounded-[1rem] tw-border-black tw-border-solid tw-border-2'
            alt='Latest podcast'
          />
        </div>
        <div
          className='tw-w-96 tw-px-10 tw-py-4 tw-flex tw-justify-center tw-flex-col tw-text-black
                    md:tw-p-4
                    lg:tw-w-[28rem]'
        >
          <Typography
            className='lg:tw-text-3xl tw-uppercase tw-font-bold
                        md:tw-text-2xl'
          >
            No-Touch Abortion
          </Typography>
          <Typography
            className='lg:tw-text-xl tw-mt-2 
                        md:tw-text-base'
          >
            Wednesday, October 25, 2023
          </Typography>
          <Typography
            className='lg:tw-text-base tw-text-justify tw-mt-5
                        md:tw-text-sm'
          >
            How the myth of the perfectly normal butt was born and how it haunts our dressing rooms today.
          </Typography>
          <Button
            type='submit'
            variant='contained'
            size='large'
            startIcon={<PlayCircleIcon className='tw-text-[24px] tw-text-primary' />}
            className='tw-btn tw-btn-outline-default tw-bg-illustration tw-text-primary tw-border-primary
                        tw-mt-8 tw-w-28 tw-h-12 tw-rounded-[20px] tw-ml-auto tw-text-base tw-leading-6
                        md:tw-ml-0'
          >
            Listen
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LatestPodcast;
