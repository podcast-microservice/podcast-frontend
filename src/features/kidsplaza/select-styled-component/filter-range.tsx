import React, { useEffect, useRef, useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowDown';
import Slider from 'rc-slider';
import cn from 'classnames';
import { useClickOutside } from './useClickOutSide';

interface IProps {
  label: string;
  defaultValue?: number[];
  onSelect?: (values: number[]) => void;
  onSave?: (values: number[]) => void;
}

function FilterRangeProduct({ label, defaultValue, onSelect, onSave }: IProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [values, setValues] = useState<number[]>(defaultValue || []);

  const handleClickOutside = () => {
    setIsMenuOpen(false);
  };
  useClickOutside(buttonRef, handleClickOutside);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleChangeSlider = (values: number[] | number) => {
    const parseValue = values as number[];
    setValues(parseValue);
  };
  const handleSave = () => {
    if (onSave) {
      onSave(values);
    }
  };
  const handleReset = () => {
    setValues(defaultValue || []);
  };

  useEffect(() => {
    if (onSelect) {
      onSelect(values);
    }
  }, [values, onSelect]);

  return (
    <div
      ref={buttonRef}
      className='tw-group tw-h-[42px] tw-w-auto tw-bg-blue-800 tw-rounded-full tw-cursor-pointer 
      tw-flex tw-gap-2 tw-items-center tw-justify-between tw-px-[10px] tw-relative
      tw-transition tw-duration-150 hover:tw-bg-amber-400 tw-cursor-default'
    >
      <button
        className='tw-absolute tw-bg-transparent tw-h-full tw-w-full tw-left-0 tw-rounded-full tw-top-0 tw-cursor-pointer'
        onClick={handleToggleMenu}
      ></button>
      <p className='tw-font-[500] tw-text-white group-hover:tw-text-blue-800'>{label}</p>
      <KeyboardArrowUpIcon
        className={cn(
          'tw-font-[500] tw-text-white tw-h-[25px] tw-w-[25px] tw-mt-[2px] group-hover:tw-text-blue-800 tw-transition-all tw-duration-300',
          {
            'tw--rotate-180': isMenuOpen
          }
        )}
      />
      {isMenuOpen && (
        <div className='tw-absolute tw-rounded-[20px] tw-min-w-[30vw] tw-h-auto tw-p-5 tw-bg-white tw-z-10 tw-left-0 tw-top-[42px] tw-mt-1 tw-shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
          <div className='tw-px-3 tw-py-2'>
            <p className='tw-text-center tw-text-blue-800 tw-font-[400] tw-mb-[10px]'>Chọn mức giá phù hợp với bạn</p>
            <Slider
              range
              min={10000}
              max={5000000}
              step={10000}
              value={values}
              onChange={handleChangeSlider}
              styles={{
                rail: {
                  background: '#D9D9D9'
                },
                track: {
                  background: '#21409A'
                },
                handle: {
                  background: '#21409A',
                  height: 20,
                  width: 20,
                  top: 2,
                  border: 'none',
                  opacity: 1,
                  boxShadow: 'none'
                }
              }}
            />
            <div className='tw-flex tw-items-center tw-justify-between tw-mt-[10px]'>
              <p>Từ {values[0].toLocaleString('vi-VN')}đ</p>
              <p>Đến {values[1].toLocaleString('vi-VN')}đ</p>
            </div>
          </div>
          <div className='tw-flex tw-flex-row tw-gap-6 tw-items-center tw-justify-center tw-mt-3'>
            <button
              onClick={handleReset}
              className='tw-w-[180px] tw-h-[38px] tw-border tw-border-solid tw-border-black/20 tw-rounded-full'
            >
              Bỏ chọn
            </button>
            <button onClick={handleSave} className='tw-w-[180px] tw-h-[38px] tw-bg-orange-500 tw-rounded-full'>
              Xem (5) kết quả
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterRangeProduct;
