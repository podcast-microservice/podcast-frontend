import Slider from 'rc-slider';
import { useEffect, useRef, useState } from 'react';
import Select, { MenuListProps, OptionProps, ValueContainerProps, components } from 'react-select';
import styled from 'styled-components';

const { ValueContainer, MenuList, Option } = components;

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'vanilla1', label: 'Vanilla1' },
  { value: 'vanilla2', label: 'Vanilla2' },
  { value: 'vanilla3', label: 'Vanilla3' },
  { value: 'vanilla4', label: 'Vanilla5' }
];

const colorVariables = {
  KPZ_Blue_Dark: '#21409A',
  KPZ_Yellow: '#FFCC32'
};

const StyledSelect = styled(Select)`
  .filter__control {
    width: 100%;
    background-color: ${colorVariables.KPZ_Blue_Dark};
    border: none;
    padding: 3px;
    cursor: pointer;
    border-radius: 9999px;
    &:hover {
      background-color: ${colorVariables.KPZ_Yellow};
      .filter__custom-placeholder,
      .filter__placeholder,
      .filter__dropdown-indicator {
        color: ${colorVariables.KPZ_Blue_Dark};
      }
    }
  }

  .filter__control--menu-is-open {
    background-color: white;
    .filter__custom-placeholder,
    .filter__placeholder,
    .filter__dropdown-indicator {
      color: ${colorVariables.KPZ_Blue_Dark};
    }
    .filter__dropdown-indicator {
      transform: rotate(-180deg);
    }
  }

  .filter__value-container {
    padding-right: 0;
  }

  .filter__multi-value {
    display: block;
  }

  .filter__clear-indicator {
    display: none;
  }

  .filter__single-value {
    display: none;
  }

  .filter__indicator-separator {
    display: none;
  }

  .filter__placeholder {
    margin-right: 1px;
    margin-left: 0px;
  }

  /* text color */
  .filter__custom-placeholder,
  .filter__placeholder,
  .filter__dropdown-indicator {
    color: white;
    font-weight: 500;
  }

  .filter__dropdown-indicator {
    transition: all 0.3s;
  }

  .filter__option {
    width: auto;
    &:active {
      background-color: white;
    }
  }

  .filter__option,
  .filter__option--is-focused,
  .filter__option--is-selected {
    background-color: white;
    box-shadow: 0px 2px 6px #8f8f8f;
    border-radius: 12px;
    color: black;
  }

  .filter__option--is-selected {
    background-color: cyan;
  }

  /* menu */
  .filter__menu {
    margin-top: 4px;
    width: auto;
    padding: 20px;
    border-radius: 20px;
    min-width: 40vw;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

const CustomValueContainer = ({ children, ...props }: ValueContainerProps) => {
  return (
    <ValueContainer {...props}>
      {props.hasValue && <p className='filter__custom-placeholder'>{props.selectProps.placeholder}</p>}
      {children}
    </ValueContainer>
  );
};

interface CustomMenuListProps extends MenuListProps {
  onClearSelectedOption: () => void;
}

const CustomMenuList = ({ children, onClearSelectedOption, ...props }: CustomMenuListProps) => {
  return (
    <MenuList {...props}>
      <div className='tw-flex tw-flex-row tw-flex-wrap tw-gap-4 tw-px-2'>{children}</div>
      <div className='tw-flex tw-flex-row tw-gap-6 tw-items-center tw-justify-center tw-mt-5'>
        <button
          className='tw-w-[180px] tw-h-[38px] tw-border tw-border-solid tw-border-black/20 tw-rounded-full'
          onClick={onClearSelectedOption}
        >
          Bỏ chọn
        </button>
        <button className='tw-w-[180px] tw-h-[38px] tw-bg-orange-500 tw-rounded-full'>Xem (5) kết quả</button>
      </div>
    </MenuList>
  );
};

const CustomOption = (props: OptionProps) => {
  return (
    <Option {...props}>
      <span>{props.label}</span>
    </Option>
  );
};

interface IProps {
  label: string;
  onSelect?: (value: any) => void;
}

function FilterOption({ label, onSelect }: IProps) {
  const [selectedItems, setSelectedItems] = useState([]);
  const handleOnChange = (value: any) => {
    setSelectedItems(value);
  };
  const handleClearSelectedItems = () => {
    setSelectedItems([]);
  };

  useEffect(() => {
    if (onSelect) {
      onSelect(selectedItems);
    }
  }, [selectedItems, onSelect]);

  return (
    <StyledSelect
      components={{
        ValueContainer: CustomValueContainer,
        MenuList: (props) => <CustomMenuList {...props} onClearSelectedOption={handleClearSelectedItems} />
      }}
      value={selectedItems}
      classNamePrefix='filter'
      placeholder={label}
      onChange={handleOnChange}
      isSearchable={false}
      options={options}
      hideSelectedOptions={false}
      closeMenuOnSelect={false}
      isMulti
    />
  );
}

export default FilterOption;

interface RangeMenuListProps extends MenuListProps {
  values: number[];
  onChange: (values: number[]) => void;
  onReset: () => void;
}

const RangeMenuList = ({ values, onChange, onReset, ...props }: RangeMenuListProps) => {
  useEffect(() => {
    console.log('range rerender');
    return () => {
      // Cleanup code (optional)
      console.log('clean range');
    };
  }, []);
  const handleOnChange = (values: number[] | number) => {
    onChange(values as number[]);
  };
  return (
    <div>
      <MenuList {...props}>
        <div
          className='tw-px-3 tw-py-2'
          onMouseDown={(e) => {
            e.stopPropagation();
          }}
          onTouchEnd={(e) => {
            e.stopPropagation();
          }}
        >
          <Slider
            range
            onFocus={(e) => {
              e.stopPropagation();
            }}
            onBlur={(e) => {
              e.stopPropagation();
            }}
            min={10000}
            max={5000000}
            step={10000}
            value={values}
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
        <div className='tw-flex tw-flex-row tw-gap-6 tw-items-center tw-justify-center tw-mt-3'>
          <button
            className='tw-w-[180px] tw-h-[38px] tw-border tw-border-solid tw-border-black/20 tw-rounded-full'
            onClick={onReset}
          >
            Bỏ chọn
          </button>
          <button className='tw-w-[180px] tw-h-[38px] tw-bg-orange-500 tw-rounded-full'>Xem (5) kết quả</button>
        </div>
      </MenuList>
    </div>
  );
};

export function FilterRange({ label, onSelect }: IProps) {
  const selectRef = useRef(null);
  const defaultValue = [10000, 5000000];
  const [values, setValues] = useState<number[]>(defaultValue);
  const handleChangeSlider = (values: number[]) => {
    setValues(values);
    if (onSelect) {
      onSelect(values);
    }
  };
  const handleReset = () => {
    setValues(defaultValue);
  };
  useEffect(() => {
    console.log('filter range rerender');
  }, []);
  return (
    <StyledSelect
      ref={selectRef}
      components={{
        ValueContainer: CustomValueContainer,
        MenuList: (props) => (
          <RangeMenuList values={values} {...props} onChange={handleChangeSlider} onReset={handleReset} />
        )
      }}
      classNamePrefix='filter'
      placeholder={label}
      isSearchable={false}
      hideSelectedOptions={false}
      closeMenuOnSelect={false}
      isMulti
    />
  );
}
