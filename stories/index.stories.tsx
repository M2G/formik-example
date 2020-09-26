import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import FormReactSelect from '../src/FormReactSelect';
import { INITIAL_VALUES } from '@constants';

storiesOf('Example Formik React', module)
  .add('Formik', withInfo()(() => (
    <FormReactSelect
     initialValues={INITIAL_VALUES}
     onSubmit={(data => console.log(data))}
     />
  )));




