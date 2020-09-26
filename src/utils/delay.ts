import restArguments from './restArguments';
/* eslint-disable */

// Delays a function for the given number of milliseconds, and then calls
// it with the arguments supplied.
// @ts-ignore
const delay = restArguments(function(func, wait, args) {
  return setTimeout(function() {
    return func.apply(null, args);
  }, wait);
});

export default delay;
