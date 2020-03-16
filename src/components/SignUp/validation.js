export const required = value => value ? undefined : 'Required';
export const password = value => value.length < 8 ? 'Password must be at least 8 characters long' : undefined;
export const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;
export const username = value => value.length < 6 ? 'Username must be at least 6 characters long' : undefined;