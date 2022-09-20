import { extend } from 'vee-validate';
import { required, email, confirmed, numeric } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: '{_field_} is required',
});
extend('email', email);
extend('numeric', {
  ...numeric,
  message: '{_field_} should be numeric',
});
extend('confirmed', {
  ...confirmed,
  message: 'Password and Password confirmation fields do not match',
});
extend('min', {
  validate(value, { length }) {
    return value.length >= length;
  },
  params: ['length'],
  message: '{_field_} field must have at least {length} characters',
});
extend('max', {
  validate(value, { length }) {
    return value.length <= length;
  },
  params: ['length'],
  message: '{_field_} field must have no more than {length} characters',
});
// extend('url', {
//   validate(value) {
//     var pattern = new RegExp(
//       '^(https?:\\/\\/)?' + // protocol
//         '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
//         '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
//         '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
//         '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
//         '(\\#[-a-z\\d_]*)?$',
//       'i'
//     ); // fragment locator
//     return pattern.test(value);
//   },
//   message: 'Please enter a valid link.',
// });

extend('url', {
  validate(value) {
    if (value) {
      return /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(
        value
      );
    }

    return false;
  },
  message: 'Please enter a valid URL',
});
