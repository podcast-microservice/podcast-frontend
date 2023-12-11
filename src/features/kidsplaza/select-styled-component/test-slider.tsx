import Slider from 'rc-slider';
import React from 'react';

interface IProps {
  values: number[];
  onChangeSlider: (values: number[]) => void;
}

function TestSlider({ values, onChangeSlider }: IProps) {
  const handleOnChange = (values: number[] | number) => {
    onChangeSlider(values as number[]);
  };
  return (
    <div>
      <Slider
        value={values}
        range
        min={10000}
        max={5000000}
        step={10000}
        onChange={handleOnChange}
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
      <div className='tw-flex tw-items-center tw-justify-between tw-mt-4'>
        <p>Từ {values[0].toLocaleString('vi-VN')}đ</p>
        <p>Đến {values[1].toLocaleString('vi-VN')}đ</p>
      </div>
    </div>
  );
}

export default TestSlider;
