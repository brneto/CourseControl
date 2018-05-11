const required = value => value ? undefined : 'Required';
const minLength = min => value =>
  value && value.length < min
    ? `Must have at least ${min} characters.`
    : undefined;

export { required, minLength };
