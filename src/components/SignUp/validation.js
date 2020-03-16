// export const validate = values => {
//   const errors = {}

//   if (!values.email) {
//       errors.email = 'Required'
//   }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
//       errors.email = 'Invalid email address'
//   }
//   if (!values.password) {
//       errors.password = 'Required'
//   }else if(values.password.length<8){
//       errors.password = 'Password must be at least 8 characters long'
//   }
//   if (!values.username) {
//       errors.username = 'Required'
//   }else if(values.username.length<6){
//       errors.username = 'Username must be at least 6 characters long'
//   }

//   return errors
// };

export const required = value => value ? undefined : 'Required';
export const password = value => value.length < 8 ? 'Password must be at least 8 characters long' : undefined;
export const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;
export const username = value => value.length < 6 ? 'Username must be at least 6 characters long' : undefined;
