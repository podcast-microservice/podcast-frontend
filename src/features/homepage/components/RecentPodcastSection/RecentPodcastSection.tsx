import Typography from '@mui/material/Typography';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const RecentPodcastSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className='tw-flex tw-items-center tw-justify-center tw-flex-col tw-bg-lighter-background tw-p-10'>
      <div
        className='tw-flex tw-flex-row tw-items-center tw-justify-center tw-text-center tw-mb-10'
        data-aos='fade-down'
      >
        <IconButton
          aria-label='fingerprint'
          className='tw-mr-3 md:tw-mr-10 tw-bg-primary tw-text-background'
          size='medium'
        >
          <KeyboardArrowLeftIcon />
        </IconButton>

        <Typography className='tw-text-3xl  md:tw-text-4xl tw-text-primary tw-font-medium'>RECENT PODCAST</Typography>
        <IconButton
          aria-label='fingerprint'
          className='tw-ml-3 md:tw-ml-10 tw-bg-primary tw-text-background'
          size='medium'
        >
          <KeyboardArrowRightIcon />
        </IconButton>
      </div>
      <div className='tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-5 tw-mb-10'>
        {mockData.map((item) => {
          return (
            <article
              data-aos='fade-up'
              key={item.id}
              className='group tw-overflow-hidden tw-rounded-lg tw-group tw-relative'
            >
              <a href={item.url} target='_blank'>
                <img
                  className='tw-transform tw-transition tw-duration-500 group-hover:tw-scale-110 group-hover:tw-blur-sm'
                  src={item.imageURL}
                  alt=''
                />
                <Button
                  variant='contained'
                  size='large'
                  className='tw-btn tw-btn-outline-primary tw-invisible group-hover:tw-visible tw-absolute tw-top-1/2 tw-left-1/2 tw--translate-x-1/2 tw--translate-y-1/2'
                >
                  Watch this episode
                </Button>
              </a>
            </article>
          );
        })}
      </div>
      <Button variant='contained' size='large' className='tw-btn tw-btn-outline-transparent tw-ml-2 '>
        Watch other episodes
      </Button>
    </section>
  );
};
const mockData = [
  {
    id: 1,
    url: 'https://www.google.com/',
    imageURL: 'https://d258zg1zfzxoto.cloudfront.net/static-images/recent-podcast-item-1.jpg'
  },
  {
    id: 2,
    url: 'https://www.google.com/',
    imageURL: 'https://d258zg1zfzxoto.cloudfront.net/static-images/recent-podcast-item-2.jpg'
  }
];

export default RecentPodcastSection;
