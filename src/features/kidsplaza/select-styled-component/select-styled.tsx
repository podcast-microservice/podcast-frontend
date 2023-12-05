import React from 'react';
import Select, { MenuProps, ValueContainerProps, components } from 'react-select';
import styled from 'styled-components';

const { ValueContainer } = components;

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

  .filter__custom-placeholder,
  .filter__placeholder,
  .filter__dropdown-indicator {
    color: white;
    font-weight: 500;
  }

  /* menu */
  .filter__menu {
    margin-top: 4px;
    height: 200px;
    width: auto;
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

const CustomMenu = ({ children, ...props }: MenuProps) => {
  return (
    <components.Menu {...props}>
      {React.Children.map(children, (child) => (
        <div className='tw-h-10 tw-w-96 tw-rounded-lg block'>{child}</div>
      ))}
    </components.Menu>
  );
};

function FilterOption() {
  const handleOnChange = (value: any) => {
    console.log(value);
  };
  return (
    <StyledSelect
      components={{
        ValueContainer: CustomValueContainer,
        Menu: CustomMenu
      }}
      classNamePrefix='filter'
      options={options}
      placeholder='Thương hiệu'
      onChange={handleOnChange}
      isSearchable={false}
      isMulti
    />
  );
}

export default FilterOption;
