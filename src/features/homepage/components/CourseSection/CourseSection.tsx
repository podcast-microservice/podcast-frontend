import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import IconRound from '~/shared/components/ui/IconRound';
import Button from '@mui/material/Button';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const CourseSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className='tw-flex tw-items-center tw-justify-center'>
      <div className='tw-grid tw-content-center tw-items-center tw-grid-cols-1 lg:tw-grid-cols-2 lg:tw-mx-10 tw-py-10 tw-px-10 tw-max-w-5xl tw-gap-20'>
        {/* left column */}
        <div className='tw-hidden lg:tw-flex tw-items-center' data-aos='fade-right'>
          <img
            className='tw-w-full'
            src='https://d258zg1zfzxoto.cloudfront.net/static-images/home-page-course-brain.png'
            alt=''
          />
        </div>
        {/* right column */}
        <div data-aos='fade-left'>
          <div className='tw-flex tw-mb-5 tw-items-center'>
            <div className=' tw-border-b-2 tw-border-primary tw-w-16 tw-mr-3' />
            <Typography className='tw-text-3xl  md:tw-text-4xl tw-text-primary tw-font-medium'>Course</Typography>
          </div>

          <Typography className='tw-text-xl  md:tw-text-2xl tw-text-foreground tw-font-medium tw-mb-3'>
            Amazing course for you
          </Typography>
          <Typography className='tw-text-sm md:tw-text-base tw-text-foreground tw-font-medium'>
            A psychology course offers a window into the intricacies of the human psyche, covering thinking, emotions,
            relationships, and more. Dive in to gain valuable knowledge and tools for better understanding and enhancing
            your psychological well-being.
          </Typography>
          <div className='tw-grid tw-grid-cols-2 tw-gap-2 tw-m-5 tw-mb-10'>
            {data.map((content, index) => (
              <CheckIconWithText key={index} content={content} />
            ))}
          </div>
          <div className='tw-flex tw-justify-center lg:tw-justify-end'>
            <Button variant='contained' size='large' className='tw-btn tw-btn-outline-transparent tw-ml-2'>
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const data = ['Psychology', 'Unlimited Revisions', 'Best Solutions', 'Good Features'];
const CheckIconWithText: React.FC<CheckIconWithTextProps> = ({ content }) => {
  return (
    <div className='tw-flex tw-items-center'>
      <IconRound
        icon={<CheckIcon className='tw-text-[20px] tw-text-background' />}
        backgroundColor='primary'
        className='tw-mr-2'
      />
      <Typography className='tw-text-sm md:tw-text-base tw-text-foreground tw-font-medium'>{content}</Typography>
    </div>
  );
};
type CheckIconWithTextProps = {
  content: string;
};

export default CourseSection;
