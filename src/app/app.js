import { AlertService } from './alert.service';
import { ComponentService } from './component.service';
import { isInputValid } from './utils/input-validator';
import { createErrorMessage } from './utils/create-error-message';

const alertService = new AlertService();
const componentService = new ComponentService();

export function run() {
  componentService.onAppLoad(() => {
    componentService.onSubmitInputs((...inputs) => {
      if (!isInputValid(...inputs)) {
        const errorMessage = createErrorMessage(...inputs);
        alertService.showError(errorMessage);
        componentService.showResult('');
        return;
      }
      inputs = inputs.map((input) => parseInt(input));
      const sum = inputs.reduce((total, input) => total + input);
      componentService.showResult(sum);
    });
  }, alertService);
}
