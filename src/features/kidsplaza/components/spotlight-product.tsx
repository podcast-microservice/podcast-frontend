import React from 'react';
import SwiperWithCustomArrow from './slider-with-custom-arrow';
import { SwiperSlide } from 'swiper/react';
import { Button } from '@mui/material';

function ProductSpotlight() {
  return (
    <div className='tw-ml-10 tw-flex tw-flex-col tw-items-start tw-gap-5 tw-w-[1204px] tw-p-5 tw-bg-gray-200 tw-rounded-[20px]'>
      <div className='tw-flex tw-items-end tw-justify-between tw-gap-3 tw-w-full'>
        <div className='tw-flex tw-items-end tw-gap-3'>
          <h3 className='tw-text-blue-500 tw-text-[20px] tw-font-[800]'>Bĩm & Tã</h3>
          <div className='tw-flex tw-items-end tw-gap-3 tw-divide-x'>
            <p className='tw-text-orange-400'>Bĩm tã quần</p>
            <p className='tw-pl-3'>Bĩm tã dán</p>
            <p className='tw-pl-3'>Miếng lót sơ sinh</p>
            <p className='tw-pl-3'>Bĩm người lớn</p>
            <p className='tw-pl-3'>Tã vải</p>
          </div>
        </div>
        <p className='tw-text-[12px] tw-text-sky-300'>Có 30 sản phẩm</p>
      </div>
      <div className='tw-w-full tw-h-[230px] tw-pb-5 tw-border-b tw-border-solid tw-border-gray-400'>
        <SwiperWithCustomArrow
          slidesPerView={1.6}
          spaceBetween={20}
          className='tw-h-full tw-rounded-lg'
          buttonPrevClassName='-tw-left-[2%]'
          pagination={{ type: 'fraction' }}
        >
          <SwiperSlide className='tw-bg-cyan-100 tw-rounded-lg'>Slide 1</SwiperSlide>
          <SwiperSlide className='tw-bg-cyan-100 tw-rounded-lg'>Slide 2</SwiperSlide>
          <SwiperSlide className='tw-bg-cyan-100 tw-rounded-lg'>Slide 3</SwiperSlide>
        </SwiperWithCustomArrow>
      </div>
      <div className='tw-flex tw-items-center tw-gap-5 tw-w-full tw-pb-5 tw-border-b tw-border-solid tw-border-gray-400'>
        <div className='tw-flex tw-items-end tw-gap-8'>
          <div className='tw-h-[85px] tw-w-[60px] tw-bg-purple-400 tw-rounded-lg'></div>
          <div className='tw-h-[85px] tw-w-[60px] tw-bg-purple-400 tw-rounded-lg'></div>
          <div className='tw-h-[85px] tw-w-[60px] tw-bg-purple-400 tw-rounded-lg'></div>
          <div className='tw-h-[85px] tw-w-[60px] tw-bg-purple-400 tw-rounded-lg'></div>
          <div className='tw-h-[85px] tw-w-[60px] tw-bg-purple-400 tw-rounded-lg'></div>
        </div>
        <div className='tw-h-[85px] tw-w-[1px] tw-bg-gray-400'></div>
        <div className='tw-flex tw-items-end tw-gap-3 tw-divide-x tw-text-[14px]'>
          <p>{'NB < 5kg'}</p>
          <p className='tw-pl-3'>{'NB < 5 kg'}</p>
          <p className='tw-pl-3'>{'S < 4-8 kg'}</p>
          <p className='tw-pl-3'>{'M < 5-11 kg'}</p>
          <p className='tw-pl-3'>{'L < 9-14 kg'}</p>
          <p className='tw-pl-3'>{'XL < 12-18 kg'}</p>
          <p className='tw-pl-3'>{'XXl < 13-25 kg'}</p>
        </div>
      </div>
      <div className='tw-h-[288px] tw-overflow-hidden tw-flex tw-flex-wrap tw-items-center tw-justify-center tw-gap-7 tw-pb-5 tw-w-full tw-border-b tw-border-solid tw-border-gray-400'>
        <div className='tw-h-[120px] tw-w-[120px] tw-rounded-full tw-bg-amber-400'></div>
        <div className='tw-h-[120px] tw-w-[120px] tw-rounded-full tw-bg-amber-400'></div>
        <div className='tw-h-[120px] tw-w-[120px] tw-rounded-full tw-bg-amber-400'></div>
        <div className='tw-h-[120px] tw-w-[120px] tw-rounded-full tw-bg-amber-400'></div>
        <div className='tw-h-[120px] tw-w-[120px] tw-rounded-full tw-bg-amber-400'></div>
        <div className='tw-h-[120px] tw-w-[120px] tw-rounded-full tw-bg-amber-400'></div>
        <div className='tw-h-[120px] tw-w-[120px] tw-rounded-full tw-bg-amber-400'></div>
        <div className='tw-h-[120px] tw-w-[120px] tw-rounded-full tw-bg-amber-400'></div>
        <div className='tw-h-[120px] tw-w-[120px] tw-rounded-full tw-bg-amber-400'></div>
        <div className='tw-h-[120px] tw-w-[120px] tw-rounded-full tw-bg-amber-400'></div>
        <div className='tw-h-[120px] tw-w-[120px] tw-rounded-full tw-bg-amber-400'></div>
        <div className='tw-h-[120px] tw-w-[120px] tw-rounded-full tw-bg-amber-400'></div>
        <div className='tw-h-[120px] tw-w-[120px] tw-rounded-full tw-bg-amber-400'></div>
        <div className='tw-h-[120px] tw-w-[120px] tw-rounded-full tw-bg-amber-400'></div>
        <div className='tw-h-[120px] tw-w-[120px] tw-rounded-full tw-bg-amber-400'></div>
        <div className='tw-h-[120px] tw-w-[120px] tw-rounded-full tw-bg-amber-400'></div>
        <div className='tw-h-[120px] tw-w-[120px] tw-rounded-full tw-bg-amber-400'></div>
        <div className='tw-h-[120px] tw-w-[120px] tw-rounded-full tw-bg-amber-400'></div>
      </div>
      <div className='tw-flex tw-flex-wrap tw-items-center tw-justify-center tw-gap-5 tw-mt-5'>
        <div className='tw-h-[324px] tw-w-[450px] tw-bg-pink-300 tw-rounded-[20px]'></div>
        <div className='tw-h-[324px] tw-w-[216px] tw-bg-pink-300 tw-rounded-[20px]'></div>
        <div className='tw-h-[324px] tw-w-[216px] tw-bg-orange-300 tw-rounded-[20px]'></div>
        <div className='tw-h-[324px] tw-w-[216px] tw-bg-pink-300 tw-rounded-[20px]'></div>
        <div className='tw-h-[324px] tw-w-[216px] tw-bg-orange-300 tw-rounded-[20px]'></div>
        <div className='tw-h-[324px] tw-w-[216px] tw-bg-pink-300 tw-rounded-[20px]'></div>
        <div className='tw-h-[324px] tw-w-[216px] tw-bg-orange-300 tw-rounded-[20px]'></div>
        <div className='tw-h-[324px] tw-w-[216px] tw-bg-pink-300 tw-rounded-[20px]'></div>
        <div className='tw-h-[324px] tw-w-[216px] tw-bg-orange-300 tw-rounded-[20px]'></div>
      </div>
      <Button className='tw-btn tw-bg-blue-500 tw-rounded-full tw-self-center'>Xem Tat ca</Button>
    </div>
  );
}

export default ProductSpotlight;
