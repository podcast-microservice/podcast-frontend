import { Button } from '@mui/material';
import React from 'react';

function BestSellerBlock() {
  return (
    <div className='tw-bg-sky-200 tw-py-5 tw-px-40'>
      <div className='tw-flex tw-items-center tw-gap-8 tw-text-[20px] tw-font-[800]'>
        <p className='tw-text-blue-500 tw-cursor-pointer'>Bán chạy</p>
        <p className='tw-text-gray-500 tw-cursor-pointer'>Nổi bật</p>
        <p className='tw-text-gray-500 tw-cursor-pointer'>Mới về</p>
      </div>
      <div className='tw-flex tw-items-center tw-gap-5 tw-mt-5'>
        <div className='tw-flex tw-flex-col tw-items-center tw-justify-start tw-gap-5'>
          <div className='tw-h-[324px] tw-w-[450px] tw-bg-pink-300 tw-rounded-[20px]'></div>
          <div className='tw-h-[324px] tw-w-[450px] tw-bg-orange-300 tw-rounded-[20px]'></div>
        </div>
        <div className='tw-flex tw-flex-wrap tw-items-start tw-justify-center tw-content-start tw-gap-5'>
          <div className='tw-h-[324px] tw-w-[216px] tw-bg-pink-300 tw-rounded-[20px]'></div>
          <div className='tw-h-[324px] tw-w-[216px] tw-bg-orange-300 tw-rounded-[20px]'></div>
          <div className='tw-h-[324px] tw-w-[216px] tw-bg-pink-300 tw-rounded-[20px]'></div>
          <div className='tw-h-[324px] tw-w-[216px] tw-bg-orange-300 tw-rounded-[20px]'></div>
          <div className='tw-h-[324px] tw-w-[216px] tw-bg-pink-300 tw-rounded-[20px]'></div>
          <div className='tw-h-[324px] tw-w-[216px] tw-bg-orange-300 tw-rounded-[20px]'></div>
        </div>
      </div>
      <div className='tw-text-center tw-mt-5'>
        <Button className='tw-btn tw-bg-blue-500 tw-rounded-full'>Xem Tat ca</Button>
      </div>
    </div>
  );
}

export default BestSellerBlock;
