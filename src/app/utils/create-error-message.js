import { isInputValid } from './input-validator';

export function createErrorMessage(...inputs) {
  const finalMessage = inputs.reduce((message, input) => {
    if (!isInputValid(input)) return message + ` ${input} is not a number.`;
    return message;
  }, 'Please enter a valid two numbers!');
  return finalMessage;
}
