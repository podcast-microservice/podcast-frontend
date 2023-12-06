import { useState } from 'react';
import Select, { MenuListProps, OptionProps, ValueContainerProps, components } from 'react-select';
import styled from 'styled-components';

const { ValueContainer, MenuList, Option } = components;

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
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
    display: none;
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

  .filter__option,
  .filter__option--is-focused,
  .filter__option--is-selected {
    background-color: white;
    box-shadow: 0px 2px 6px #8f8f8f;
    border-radius: 12px;
    color: black;
  }

  /* menu */
  .filter__menu {
    margin-top: 4px;
    width: auto;
    padding: 20px;
    border-radius: 20px;
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

const CustomMenuList = ({ children, ...props }: MenuListProps) => {
  return (
    <MenuList {...props}>
      <div className='tw-flex tw-flex-row tw-gap-4 tw-px-2'>{children}</div>
      <div className='tw-flex tw-flex-row tw-gap-6 tw-items-center tw-justify-center tw-mt-5'>
        <button className='tw-w-[180px] tw-h-[38px] tw-border tw-border-solid tw-border-black/20 tw-rounded-full'>
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
      <div className='tw-flex tw-items-center tw-justify-center tw-gap-2'>
        <input type='radio' checked={props.isSelected} className='tw-mt-[2px]' />
        <span>{props.label}</span>
      </div>
    </Option>
  );
};

function FilterOption() {
  const [selectedItems, setSelectedItems] = useState([]);
  const handleOnChange = (value: any) => {
    setSelectedItems(value);
  };
  console.log(selectedItems);
  return (
    <StyledSelect
      components={{
        ValueContainer: CustomValueContainer,
        MenuList: CustomMenuList,
        Option: CustomOption
      }}
      value={selectedItems}
      classNamePrefix='filter'
      options={options}
      placeholder='Thương hiệu'
      onChange={handleOnChange}
      isSearchable={false}
      hideSelectedOptions={false}
      closeMenuOnSelect={false}
      isMulti
    />
  );
}

export default FilterOption;
