const requiredMessage = 'This field is required';

export const requiredValidation = { required: requiredMessage };

export const emailValidation = {
  validate: (value: string) => {
    const myEmailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,6}$/;
    return myEmailRegex.test(value) || 'Incorrect field';
  },
};
