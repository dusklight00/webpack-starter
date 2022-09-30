export const isInputValid = (...inputs) => {
  const isValid = inputs.every((input) => {
    const inputInt = parseInt(input);
    return typeof inputInt === 'number' && !isNaN(input);
  });
  return isValid;
};
