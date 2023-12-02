import { Typography } from '@mui/material';
import { LatestPodcast, FilterPodcast, PodcastList } from '~/features/podcast';

const PodcastPage = () => {
  return (
    <>
      <LatestPodcast />
      <div className='tw-px-[5%] lg:tw-px-[8%] tw-my-14'>
        <div
          className='tw-flex tw-items-center tw-justify-between tw-flex-col
                    md:tw-flex-row'
        >
          <Typography
            className='tw-text-2xl tw-font-bold tw-mb-4
                      md:tw-text-3xl md:tw-mb-0'
          >
            Podcast
          </Typography>
          <FilterPodcast />
        </div>
        <PodcastList />
      </div>
    </>
  );
};

export default PodcastPage;
