import { useState } from 'react';
import PodcastItem from '../PodcastItem';
import Pagination from '@mui/material/Pagination';

const PodcastList = () => {
  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  console.log(page);
  return (
    <div className='tw-my-10 tw-flex tw-justify-center tw-flex-wrap'>
      <div className='tw-flex tw-justify-center tw-flex-wrap'>
        <PodcastItem />
        <PodcastItem />
        <PodcastItem />
        <PodcastItem />
        <PodcastItem />
        <PodcastItem />
        <PodcastItem />
        <PodcastItem />
      </div>
      <Pagination
        page={page}
        count={10}
        color='primary'
        size='large'
        className='tw-mt-10 tw-hidden md:tw-block'
        showFirstButton
        showLastButton
        onChange={handleChange}
      />
      <Pagination
        page={page}
        count={10}
        color='primary'
        className='tw-mt-10 md:tw-hidden'
        boundaryCount={0}
        onChange={handleChange}
      />
    </div>
  );
};

export default PodcastList;
