/* eslint-disable */
import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent, waitFor } from "@testing-library/react";
import selectEvent from 'react-select-event'
import FormExample from './FormReactSelect';
import { INPUT_NAME } from './constants';
import { INITIAL_VALUES } from './constants';


it("submits correct values", async () => {

  const { container, getByRole, getByLabelText, getByTestId } = render(
    <FormExample
      initialValues={INITIAL_VALUES}
      // @ts-ignore
      onSubmitValue={(data => console.log(data))}
  />);

  const name: any = container.querySelector(`input[name="${INPUT_NAME.NAME}"]`);
  const firstName: any = container.querySelector(`input[name="${INPUT_NAME.FIRST_NAME}"]`);
  const email: any = container.querySelector(`input[name="${INPUT_NAME.EMAIL}"]`);
  const password: any = container.querySelector(`input[name="${INPUT_NAME.PASSWORD}"]`);
  const checkbox: any = container.querySelectorAll(`input[name="${INPUT_NAME.DAYS_AVAILABLES}"]`);
  const submit: any = container.querySelector('button[type="submit"]');
  const results: any = container.querySelector("[data-results]");

  await waitFor(() => {
    return fireEvent.change(name, {
      target: {
        value: "mockname"
      }
    });
  });

  await waitFor(() => {
    return fireEvent.change(firstName, {
      target: {
        value: "firstname"
      }
    })
  });

  await waitFor(() => {
    return fireEvent.change(email, {
      target: {
        value: "mock@email.com"
      }
    })
  });

  await waitFor(() => {
    return fireEvent.change(password, {
      target: {
        value: "secret"
      }
    })
  });

  expect(getByRole("form")).toHaveFormValues({ language:  "", programming_lang: "" });

  await selectEvent.select(getByLabelText('Language'), 'French');
  await selectEvent.select(getByLabelText('Programming language'), ['Golang', 'Rust']);

  expect(getByRole("form")).toHaveFormValues({ language: "fr-FR", programming_lang: ['rust', 'golang'] });

  await waitFor(() => {
    fireEvent.click(checkbox[0]);
    expect(getByTestId("toggle_1")).toHaveProperty("checked", true);
  });

  await waitFor(() => {
    // @ts-ignore
    return fireEvent.click(submit)
  });

  expect(results?.innerHTML)
    .toBe('{"name":"mockname","firstname":"firstname","email":"mock@email.com","password":"secret","language":"fr-FR","programming_lang":["golang","rust"],"days_availables":[1]}')
});
