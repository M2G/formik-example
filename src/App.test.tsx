import React from 'react';
import ReactDOM from 'react-dom';
import { INITIAL_VALUES } from '@constants';
import FormReactSelect from './FormReactSelect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  // eslint-disable-next-line
  ReactDOM.render(
    <FormReactSelect
      initialValues={INITIAL_VALUES}
      onSubmit={(data) => console.log(data)}
    />,
    div,
  );
});
