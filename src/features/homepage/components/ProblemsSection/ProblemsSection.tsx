import Typography from '@mui/material/Typography';
import React from 'react';
const ProblemsSection = () => {
  return (
    <section className='tw-flex tw-flex-col tw-justify-center tw-items-center tw-text-center tw-p-3 tw-py-20'>
      <Typography className='tw-text-3xl  md:tw-text-4xl tw-text-primary tw-font-medium tw-mb-3'>
        Helping You Solve Issues
      </Typography>
      <hr className=' tw-border-b-2 tw-border-primary tw-w-28 tw-mb-10' />
      <div className='tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4'>
        {mockData.map((item) => (
          <ProblemItem {...item} />
        ))}
      </div>
    </section>
  );
};
const ProblemItem: React.FC<ProblemItemProps> = ({ icon, heading, content }) => {
  return (
    <article
      className='tw-flex tw-items-center justify-items-center tw-flex-col 
            tw-border tw-border-primary tw-rounded-lg 
            tw-p-10 tw-max-w-xs'
    >
      <img src={icon} alt='' className='tw-mb-5' />
      <Typography className='tw-text-xl tw-font-medium tw-mb-3'>{heading}</Typography>
      <Typography className='tw-mb-3'>{content}</Typography>
    </article>
  );
};
const mockData = [
  {
    icon: 'https://d258zg1zfzxoto.cloudfront.net/static-images/problemIcon1.svg',
    heading: 'Relationship issues',
    content: 'Helping you resolve conflicts and conflicts in relationships'
  },
  {
    icon: 'https://d258zg1zfzxoto.cloudfront.net/static-images/problemIcon2.svg',
    heading: 'Anxiety disorders',
    content: 'Emotional disorders characterized by feelings of fear spreading, vague discomfort'
  },
  {
    icon: 'https://d258zg1zfzxoto.cloudfront.net/static-images/problemIcon3.svg',
    heading: 'Psychology of behavior',
    content: 'Research on the relationship between our minds and behavior'
  },
  {
    icon: 'https://d258zg1zfzxoto.cloudfront.net/static-images/problemIcon4.svg',
    heading: 'Psychotherapy',
    content: 'Psychotherapy or talk therapy is an important form of mental health care'
  },
  {
    icon: 'https://d258zg1zfzxoto.cloudfront.net/static-images/problemIcon5.svg',
    heading: 'Educational psychology',
    content: 'Educational psychology focuses on psychology of teaching, student concerns'
  },
  {
    icon: 'https://d258zg1zfzxoto.cloudfront.net/static-images/problemIcon6.svg',
    heading: 'Anger management',
    content: 'Anger management is a psychotherapy program to prevent and control anger'
  }
];
type ProblemItemProps = {
  icon: string;
  heading: string;
  content: string;
};
export default ProblemsSection;
