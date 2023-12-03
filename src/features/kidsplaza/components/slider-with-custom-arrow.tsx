import { IconButton } from '@mui/material';
import { Swiper, SwiperProps } from 'swiper/react';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Pagination, Navigation, Scrollbar } from 'swiper/modules';
import cn from 'classnames';

interface IProps extends SwiperProps {
  buttonPrevClassName?: string;
  buttonNextClassName?: string;
}

const SwiperWithCustomArrow: React.FC<IProps> = ({ children, buttonNextClassName, buttonPrevClassName, ...props }) => {
  const buttonPrevClass = cn(
    buttonPrevClassName,
    'prev tw-bg-white tw-absolute tw-z-[2] tw-transform tw-top-1/2 tw--translate-y-1/2 tw-left-5'
  );
  const buttonNextClass = cn(
    buttonNextClassName,
    'next tw-bg-white tw-absolute tw-z-[1] tw-transform tw-top-1/2 tw--translate-y-1/2 tw-right-5'
  );
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar]}
      navigation={{
        prevEl: '.prev',
        nextEl: '.next'
      }}
      {...props}
    >
      {children}
      <IconButton className={buttonPrevClass}>
        <NavigateBeforeIcon className='tw-text-[20px] tw-scale-125' />
      </IconButton>
      <IconButton className={buttonNextClass}>
        <NavigateNextIcon className='tw-text-[20px] tw-scale-125' />
      </IconButton>
    </Swiper>
  );
};

export default SwiperWithCustomArrow;
