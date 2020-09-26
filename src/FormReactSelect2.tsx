/* eslint-disable */
import * as React from 'react';
import { Formik, Field, Form } from 'formik';
import CustomSelect from './Select';
import Checkbox from "./Checkbox";

import {
  ERROR_TEXT_REQUIRED,
  INPUT_NAME,
  LABEL_NAME,
  LABEL_EMAIL,
  LABEL_FIRST_NAME,
  LABEL_PASSWORD,
  LABEL_LANGUAGE,
  LABEL_PROGRAMMING_LANGUAGE,
  PLACEHOLDER_NAME,
  PLACEHOLDER_FIRST_NAME,
  PLACEHOLDER_EMAIL,
  PLACEHOLDER_PASSWORD,
  PLACEHOLDER_LANGUAGE,
  PLACEHOLDER_PROGRAMMING_LANGUAGE,
  LANGUAGE_OPTION,
  PROGRAMMING_LANGUAGE_OPTION,
  LABEL_DAYS_AVAILABLES,
  DAYS,
} from '@constants';

const {
  ERROR_TEXT_REQUIRED_EMAIL,
  ERROR_TEXT_REQUIRED_PASSWORD,
  ERROR_TEXT_REQUIRED_NAME,
  ERROR_TEXT_REQUIRED_FIRST_NAME,
  ERROR_TEXT_REQUIRED_LANGUAGE,
  ERROR_TEXT_REQUIRED_PROGRAMMING_LANGUAGE,
  ERROR_TEXT_REQUIRED_DAYS_AVAILABLES,
} = ERROR_TEXT_REQUIRED;

export namespace FormNS {
  export interface Props {
    initialValues: object;
  }

  export interface PropsFromDispatch {
    onSubmit: (form: object) => void;
  }

  export interface State {
    results?: object;
  }
}

class FormExample extends React.PureComponent
  <FormNS.Props & FormNS.PropsFromDispatch & FormNS.State> {
  state = {
    results: {}
  };

  constructor(props: Readonly<FormNS.Props>) {
    // @ts-ignore
    super(props);

    this.onValidate = this.onValidate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // @ts-ignore
    this.renderForm = this.renderForm.bind(this);
  }

  private onValidate(values: object): object {
    const errors = {};

    if (!values[INPUT_NAME.NAME]) {
      errors[INPUT_NAME.NAME] = ERROR_TEXT_REQUIRED_NAME;
    }

    if (!values[INPUT_NAME.FIRST_NAME]) {
      errors[INPUT_NAME.FIRST_NAME] = ERROR_TEXT_REQUIRED_FIRST_NAME;
    }

    if (!values[INPUT_NAME.EMAIL]) {
      errors[INPUT_NAME.EMAIL] = ERROR_TEXT_REQUIRED_EMAIL;
    }

    if (!values[INPUT_NAME.PASSWORD]) {
      errors[INPUT_NAME.PASSWORD] = ERROR_TEXT_REQUIRED_PASSWORD;
    }

    if (!values[INPUT_NAME.LANGUAGE]?.length) {
      errors[INPUT_NAME.LANGUAGE] = ERROR_TEXT_REQUIRED_LANGUAGE;
    }

    if (!values[INPUT_NAME.PROGRAMMING_LANGUAGE]?.length) {
      errors[INPUT_NAME.PROGRAMMING_LANGUAGE] = ERROR_TEXT_REQUIRED_PROGRAMMING_LANGUAGE;
    }

    if (!values[INPUT_NAME.DAYS_AVAILABLES]?.length) {
      errors[INPUT_NAME.DAYS_AVAILABLES] = ERROR_TEXT_REQUIRED_DAYS_AVAILABLES;
    }

    console.log('onValidate values', values);
    console.log('onValidate errors', errors);

    return errors;
  }

  private onSubmit(values: object): void {
    const { onSubmit = () => {} } = this.props;
    onSubmit(values);
    this.setState({ results: values });
  }

  private renderForm({
                       handleSubmit,
                       setFieldValue,
                       values,
                       errors,
                       touched,
                     }){

    const { results } = this.state;

    console.log('values', values);
    // console.log('result', results);
    return (
      <div className="o-zone">
        <div className="o-grid">
          <div className="c-login">
            <div className="o-grid__row">
              <div className="o-col c-forms">
                <Form role="form">
                  <div className="c-forms__item">
                    <label htmlFor="name">{LABEL_NAME}</label>
                    <Field
                      type="text"
                      id="name"
                      name={INPUT_NAME.NAME}
                      onChange={({ target: { value } }) =>
                        setFieldValue(INPUT_NAME.NAME, value)
                      }
                      placeholder={PLACEHOLDER_NAME}
                      value={values[INPUT_NAME.NAME]}
                    />
                    {touched[INPUT_NAME.NAME] &&
                    errors &&
                    errors[INPUT_NAME.NAME] ? (
                      <span className="error-text">
                        {errors[INPUT_NAME.NAME]}
                      </span>
                    ) : null}
                  </div>
                  <div className="c-forms__item">
                    <label htmlFor="firstname">
                      {LABEL_FIRST_NAME}
                    </label>
                    <Field
                      type="text"
                      id="firstname"
                      name={INPUT_NAME.FIRST_NAME}
                      onChange={({ target: { value } }) =>
                        setFieldValue(INPUT_NAME.FIRST_NAME, value)
                      }
                      placeholder={PLACEHOLDER_FIRST_NAME}
                      value={values[INPUT_NAME.FIRST_NAME]}
                    />
                    {touched[INPUT_NAME.FIRST_NAME] &&
                    errors &&
                    errors[INPUT_NAME.FIRST_NAME] ? (
                      <span className="error-text">
                        {errors[INPUT_NAME.FIRST_NAME]}
                      </span>
                    ) : null}
                  </div>
                  <div className="c-forms__item">
                    <label htmlFor="email">{LABEL_EMAIL}</label>
                    <Field
                      type="email"
                      id="email"
                      name={INPUT_NAME.EMAIL}
                      onChange={({ target: { value } }) =>
                        setFieldValue(INPUT_NAME.EMAIL, value)
                      }
                      placeholder={PLACEHOLDER_EMAIL}
                      value={values[INPUT_NAME.EMAIL]}
                    />
                    {touched[INPUT_NAME.EMAIL] &&
                    errors &&
                    errors[INPUT_NAME.EMAIL] ? (
                      <span className="error-text">
                        {errors[INPUT_NAME.EMAIL]}
                      </span>
                    ) : null}
                  </div>
                  <div className="c-forms__item">
                    <label htmlFor="password">{LABEL_PASSWORD}</label>
                    <Field
                      type="password"
                      id="password"
                      name={INPUT_NAME.PASSWORD}
                      onChange={({ target: { value } }) =>
                        setFieldValue(INPUT_NAME.PASSWORD, value)
                      }
                      placeholder={PLACEHOLDER_PASSWORD}
                      value={values[INPUT_NAME.PASSWORD]}
                    />
                    {touched[INPUT_NAME.PASSWORD] &&
                    errors &&
                    errors[INPUT_NAME.PASSWORD] ? (
                      <span className="error-text">
                        {errors[INPUT_NAME.PASSWORD]}
                      </span>
                    ) : null}
                  </div>
                  <div className="c-forms__item">
                    <label htmlFor={INPUT_NAME.LANGUAGE}>{LABEL_LANGUAGE}</label>
                      <Field
                        inputId="language"
                        className="language"
                        value={values[INPUT_NAME.LANGUAGE]}
                        name={INPUT_NAME.LANGUAGE}
                        placeholder={PLACEHOLDER_LANGUAGE}
                        options={LANGUAGE_OPTION}
                        component={CustomSelect}
                        isSearchable
                      />
                    {touched[INPUT_NAME.LANGUAGE] &&
                    errors &&
                    errors[INPUT_NAME.LANGUAGE] ? (
                      <span className="error-text">
                        {errors[INPUT_NAME.LANGUAGE]}
                      </span>
                    ) : null}
                  </div>
                  <div className="c-forms__item">
                    <label htmlFor={INPUT_NAME.PROGRAMMING_LANGUAGE}>
                      {LABEL_PROGRAMMING_LANGUAGE}
                    </label>
                      <Field
                          inputId="programming_lang"
                          className="programminglang"
                          value={values[INPUT_NAME.PROGRAMMING_LANGUAGE]}
                          name={INPUT_NAME.PROGRAMMING_LANGUAGE}
                          placeholder={PLACEHOLDER_PROGRAMMING_LANGUAGE}
                          options={PROGRAMMING_LANGUAGE_OPTION}
                          component={CustomSelect}
                          isSearchable
                          isMulti
                        />
                    {touched[INPUT_NAME.PROGRAMMING_LANGUAGE] &&
                    errors &&
                    errors[INPUT_NAME.PROGRAMMING_LANGUAGE] ? (
                      <span className="error-text">
                        {errors[INPUT_NAME.PROGRAMMING_LANGUAGE]}
                      </span>
                    ) : null}
                  </div>
                  <div className="o-col--half--medium">
                    <div className="form-group">
                      <label>
                        {LABEL_DAYS_AVAILABLES}
                      </label>
                    </div>
                    <div className='group-checkbox'>
                      {DAYS.map(({label, value}) => (
                        <Checkbox name={INPUT_NAME.DAYS_AVAILABLES} label={label} value={value} />
                      ))}
                      {touched[INPUT_NAME.DAYS_AVAILABLES] &&
                      errors && errors[INPUT_NAME.DAYS_AVAILABLES] ? (
                        <span className="error-text">
                          {errors[INPUT_NAME.DAYS_AVAILABLES]}
                        </span>) : null}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="c-btn"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </Form>
                <div data-results>
                  {JSON.stringify(results)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  public render(): React.ReactElement<{}> {
    const { initialValues = {} } = this.props;
    console.log('initialValues', initialValues)

    return (
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validate={this.onValidate}
        onSubmit={this.onSubmit}
      >
        {this.renderForm}
      </Formik>
    );
  }
}

export default FormExample;
