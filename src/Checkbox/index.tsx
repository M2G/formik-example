/* eslint-disable */
import React from 'react';
import PropTypes from "prop-types";
import { Field } from 'formik';
import './index.scss';


export namespace OptionNS {
  export interface Option {
    label: string;
    name: string;
    value: number;
  }
}

function Checkbox(props: OptionNS.Option) {
  return (
    <Field name={props?.name}>
      {({ field, form }) => {
        function isChecked(): any {
          return Array.isArray(field?.value) ? field?.value?.includes(props?.value) : [];
        }

        function setFieldValue(nextValue){
          return form?.setFieldValue(props?.name, nextValue);
        }

        function onChange(): Function {
          if (isChecked()) {
            const nextValue = field?.value?.filter(
              value => value !== props?.value,
            );
            return setFieldValue(nextValue);
          }
          const nextValue = field?.value?.concat(props?.value);

          return setFieldValue(nextValue);
        }
        return (
          <div>
            <input
              id={props?.label}
              data-testid={`toggle_${props?.value}`}
              className="inp-cbx"
              type="checkbox"
              {...props}
              checked={isChecked()}
              onChange={() => onChange()}
            />
            <label className="cbx" htmlFor={props?.label}>
              <span>
                <svg width="12px" height="10px">
                  <use xlinkHref="#check" />
                </svg>
              </span>
              <span>{props?.label}</span>
            </label>
            <svg className="inline-svg">
              <symbol id="check" viewBox="0 0 12 10">
                <polyline points="1.5 6 4.5 9 10.5 1" />
              </symbol>
            </svg>
          </div>
        )}}
    </Field>
  );
}

Checkbox.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
  label: PropTypes.string
};

export default Checkbox;
