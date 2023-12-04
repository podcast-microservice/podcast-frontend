import React, { useState } from 'react';
import cn from 'classnames';

export type SortOption = {
  key: string;
  name: string;
};

interface IProps {
  sorts: SortOption[];
  onChange?: (value: string) => void;
}

function CategorySort({ sorts, onChange }: IProps) {
  const [currentOption, setCurrentOption] = useState('');
  const handleSelectOption = (option: string) => {
    setCurrentOption(option);
    if (onChange) {
      onChange(option);
    }
  };
  return (
    <div className='tw-flex tw-items-center tw-gap-4 tw-mt-4'>
      <p className='tw-text-blue-500'>Sắp xếp theo</p>
      {sorts.map((sort) => {
        const sortItemClass = cn(
          {
            'tw-bg-cyan-300': currentOption === sort.key
          },
          'tw-bg-white tw-shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] tw-px-4 tw-py-2 tw-rounded-full hover:tw-drop-shadow-lg'
        );
        return (
          <button key={sort.key} className={sortItemClass} onClick={() => handleSelectOption(sort.key)}>
            {sort.name}
          </button>
        );
      })}
    </div>
  );
}

export default CategorySort;
