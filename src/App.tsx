/* eslint-disable */
import * as React from 'react';
import { INITIAL_VALUES } from '@constants';
import FormReactSelect from './FormReactSelect';

function App() {
  return (<FormReactSelect
    initialValues={INITIAL_VALUES} // if has value made merge between initialValue and value from api in example
    onSubmit={(data => console.log(data))}
  />)
}

export default App;
