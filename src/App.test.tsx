import React from 'react';
import ReactDOM from 'react-dom';
import FormReactSelect from './FormReactSelect';
import { INITIAL_VALUES } from '@constants';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <FormReactSelect
      initialValues={INITIAL_VALUES}
      onSubmit={(data) => console.log(data)}
    />,
    div,
  );
});
