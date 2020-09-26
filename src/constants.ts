/* eslint-disable */
const INPUT_NAME = {
  NAME: 'name',
  FIRST_NAME: 'firstname',
  EMAIL: 'email',
  PASSWORD: 'password',
  LANGUAGE: 'language',
  PROGRAMMING_LANGUAGE: 'programming_lang',
  DAYS_AVAILABLES: 'days_availables',
};

// Some dummy language data
const LANGUAGE_OPTION = [
  {
    label: "Chinese",
    value: "zh-CN"
  },
  {
    label: "English (US)",
    value: "en-US"
  },
  {
    label: "English (GB)",
    value: "en-GB"
  },
  {
    label: "French",
    value: "fr-FR"
  },
  {
    label: "Spanish",
    value: "es-ES"
  }
];

// Some dummy language data
const PROGRAMMING_LANGUAGE_OPTION = [
  {
    label: "Rust",
    value: "rust"
  },
  {
    label: "Golang",
    value: "golang"
  },
  {
    label: "Java",
    value: "java"
  },
  {
    label: "JavaScript",
    value: "javascript"
  },
  {
    label: "Python",
    value: "python"
  },
  {
    label: "C",
    value: "c"
  },
  {
    label: "C++",
    value: "c++"
  }
];

const DAYS = [
  {
    label: "Monday",
    value: 1
  },
  {
    label: "Tuesday",
    value: 2
  },
  {
    label: "Wednesday",
    value: 3
  },
  {
    label: "Thursday",
    value: 4
  },
  {
    label: "Friday",
    value: 5
  },
  {
    label: "Saturday",
    value: 6
  },
  {
    label: "Sunday",
    value: 0
  },
];

const INITIAL_VALUES = {
  [INPUT_NAME.NAME]: '',
  [INPUT_NAME.FIRST_NAME]: '',
  [INPUT_NAME.EMAIL]: '',
  [INPUT_NAME.PASSWORD]: '',
  [INPUT_NAME.LANGUAGE]: [],
  [INPUT_NAME.PROGRAMMING_LANGUAGE]: [],
  [INPUT_NAME.DAYS_AVAILABLES]: [],
};

const ERROR_TEXT_REQUIRED = {
  ERROR_TEXT_REQUIRED_NAME: 'Required name',
  ERROR_TEXT_REQUIRED_FIRST_NAME: 'Required first name',
  ERROR_TEXT_REQUIRED_EMAIL: 'Required email',
  ERROR_TEXT_REQUIRED_PASSWORD: 'Required password',
  ERROR_TEXT_REQUIRED_LANGUAGE: 'Required language',
  ERROR_TEXT_REQUIRED_PROGRAMMING_LANGUAGE: 'Required programming language',
  ERROR_TEXT_REQUIRED_DAYS_AVAILABLES: 'Required days availables',
};

const LABEL_NAME = 'Name';
const LABEL_FIRST_NAME = 'First name';
const LABEL_EMAIL = 'Email';
const LABEL_PASSWORD = 'Password';
const LABEL_LANGUAGE = 'Language';
const LABEL_PROGRAMMING_LANGUAGE = 'Programming language';
const LABEL_DAYS_AVAILABLES = 'Days availables';

const PLACEHOLDER_NAME = 'Name';
const PLACEHOLDER_FIRST_NAME = 'First name';
const PLACEHOLDER_EMAIL = 'Email';
const PLACEHOLDER_PASSWORD = 'Password';
const PLACEHOLDER_LANGUAGE = 'Language';
const PLACEHOLDER_PROGRAMMING_LANGUAGE = 'Programming language';
const PLACEHOLDER_DAYS_AVAILABLES = 'Days availables';

export {
  ERROR_TEXT_REQUIRED,

  LABEL_NAME,
  LABEL_FIRST_NAME,
  LABEL_EMAIL,
  LABEL_PASSWORD,
  LABEL_LANGUAGE,
  LABEL_PROGRAMMING_LANGUAGE,
  LABEL_DAYS_AVAILABLES,

  INPUT_NAME,
  INITIAL_VALUES,

  PLACEHOLDER_NAME,
  PLACEHOLDER_FIRST_NAME,
  PLACEHOLDER_EMAIL,
  PLACEHOLDER_PASSWORD,
  PLACEHOLDER_LANGUAGE,
  PLACEHOLDER_PROGRAMMING_LANGUAGE,
  PLACEHOLDER_DAYS_AVAILABLES,

  LANGUAGE_OPTION,
  PROGRAMMING_LANGUAGE_OPTION,

  DAYS,
};
