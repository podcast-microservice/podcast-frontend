import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
const HeroSection = () => {
  return (
    <section
      className="tw-h-[calc(100vh-5rem)] tw-flex tw-flex-col tw-justify-center tw-items-center 
        tw-bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('https://d258zg1zfzxoto.cloudfront.net/static-images/hero-image.jpg')]
        tw-bg-no-repeat 
        tw-bg-cover 
        tw-bg-center
        tw-text-center
        tw-bg-fixed"
    >
      <Typography className='tw-text-4xl  md:tw-text-5xl tw-text-primary tw-font-medium tw-mb-6'>
        Transform Your Mindset And Achieve Your Goal
      </Typography>
      <Typography className='tw-text-lg md:tw-text-2xl tw-mb-6 tw-text-white'>
        Here, there is information related to podcasts and content related to psychology.
      </Typography>
      <Button variant='contained' size='large' className='tw-btn tw-btn-primary tw-text-white'>
        Learn more
      </Button>
    </section>
  );
};

export default HeroSection;
