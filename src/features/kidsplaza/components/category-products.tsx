import React from 'react';
import CategorySort, { SortOption } from './category-sorting';
import Pagination from './pagination';

const sortOptions: SortOption[] = [
  {
    key: 'popular',
    name: 'Nổi bật'
  },
  {
    key: 'newest',
    name: 'Mới nhất'
  },
  {
    key: 'bestseller',
    name: 'Bán chạy'
  },
  {
    key: 'priceLowToHigh',
    name: 'Giá tăng dần'
  },
  {
    key: 'priceHighToLow',
    name: 'Giá giảm dần'
  }
];

function CategoryProduct() {
  const handleSorting = (value: string) => {
    console.log(value);
  };
  const handlePagination = (value: number) => {
    console.log(value);
  };
  return (
    <div className='tw-mt-5 tw-bg-white tw-rounded-2xl tw-p-5'>
      <div className='tw-flex tw-items-center tw-justify-between'>
        <h3 className='tw-text-blue-500 tw-font-bold tw-text-xl'>Thế giới sữa bột</h3>
        <p className='tw-text-[12px] tw-text-cyan-400'>Có 189 sản phẩm</p>
      </div>
      {/* Sorting */}
      <CategorySort sorts={sortOptions} onChange={handleSorting} />
      {/* Product */}
      <div className='tw-mt-5 tw-grid tw-grid-cols-5 tw-gap-4'>
        <div className='tw-bg-red-100 tw-h-72 tw-rounded-xl'></div>
        <div className='tw-bg-red-100 tw-h-72 tw-rounded-xl'></div>
        <div className='tw-bg-red-100 tw-h-72 tw-rounded-xl'></div>
        <div className='tw-bg-red-100 tw-h-72 tw-rounded-xl'></div>
        <div className='tw-bg-red-100 tw-h-72 tw-rounded-xl'></div>
        <div className='tw-bg-red-100 tw-h-72 tw-rounded-xl'></div>
        <div className='tw-bg-red-100 tw-h-72 tw-rounded-xl'></div>
        <div className='tw-bg-red-100 tw-h-72 tw-rounded-xl'></div>
        <div className='tw-bg-red-100 tw-h-72 tw-rounded-xl'></div>
        <div className='tw-bg-red-100 tw-h-72 tw-rounded-xl'></div>
        <div className='tw-bg-red-100 tw-h-72 tw-rounded-xl'></div>
        <div className='tw-bg-red-100 tw-h-72 tw-rounded-xl'></div>
      </div>
      {/* Pagination */}
      <div className='tw-mt-5'>
        <Pagination totalItem={180} pageSize={16} hasNavigation onChange={handlePagination} />
      </div>
    </div>
  );
}

export default CategoryProduct;
