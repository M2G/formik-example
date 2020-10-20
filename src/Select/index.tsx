/* eslint-disable */
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { FieldProps } from 'formik';
import Select, { OptionsType, ValueType } from 'react-select';
import { isString } from '@utils';

const actionInputChange = 'input-change';

export namespace OptionNS {
  export interface Option {
    label: string;
    value: string;
  }
}

interface CustomSelectProps extends FieldProps {
  options: OptionsType<OptionNS.Option>;
  inputId?: string;
  isMulti?: boolean;
  isValid?: boolean;
  isDisabled?: boolean;
  isSearchable?: boolean;
  className?: string;
  placeholder?: string;
}

function CustomSelect({
  inputId,
  className,
  placeholder,
  field,
  form,
  options,
  isSearchable = false,
  isMulti = false,
  isDisabled = false,
}: CustomSelectProps){
  const [state, setState] = React.useState({
    value: '',
    open: false,
  });

  function handleInputChange(value, { action }){
    if (action === actionInputChange) {
      return setState({
        value,
        open: !!value,
      });
    }
  }

  function onChange (option: ValueType<OptionNS.Option | OptionNS.Option[]>){
    if (!option) {
      return form.setFieldValue(field?.name, []);
    }

    return form.setFieldValue(
      field?.name,
      isMulti
        ? (option as OptionNS.Option[])?.map((item: OptionNS.Option) => item?.value) : (option as OptionNS.Option)?.value);
  }

  function getValue(): any[] | null {
    if (isDisabled) {
      return options;
    }

    if (field?.value === null) {
      return null;
    }

    if (options && Array.isArray(field?.value) ||
      options && isString(field?.value)) {
      return isMulti
        ? options?.filter(option => field?.value?.indexOf(option?.value) >= 0) :
        options?.find(option => option?.value === field?.value);
    }

    return isMulti ? [] : ('' as any);
  }

  const { value = '', open } = state;

  return (
    <Select
      inputId={inputId}
      className={className}
      closeMenuOnSelect={!isMulti}
      closeOnSelect={!isMulti}
      inputValue={isMulti && isSearchable ? value : undefined}
      isClearable={isMulti || false}
      isDisabled={isDisabled}
      isMulti={isMulti}
      isSearchable={isSearchable}
      menuIsOpen={isMulti ? open : undefined}
      name={field?.name}
      //@ts-ignore
      onBlur={() => setState({ open: false })}
      onBlurResetsInput={false}
      onChange={val => onChange(val)}
      //@ts-ignore
      onFocus={() => setState({ open: true })}
      onInputChange={isMulti && isSearchable ? handleInputChange : undefined}
      options={options}
      placeholder={placeholder}
      value={getValue()}
    />
  );
}

CustomSelect.propTypes = {
  options: PropTypes.array,
  isMulti: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape({}),
    PropTypes.array,
  ])
};

CustomSelect.defaultProps = {
  isMulti: false,
  options: [],
  value: '',
};

export default CustomSelect;
