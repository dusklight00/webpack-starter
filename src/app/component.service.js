export class ComponentService {
  constructor() {
    this.numberOneInput = document.getElementById('numberOne');
    this.numberTwoInput = document.getElementById('numberTwo');
    this.addValueButton = document.getElementById('addValues');
    this.resultDiv = document.getElementById('result');
  }

  getInputs() {
    const inputs = [this.numberOneInput.value, this.numberTwoInput.value];
    return inputs;
  }

  showResult(result) {
    this.resultDiv.innerHTML = result;
  }

  onSubmitInputs(onSubmitHandler) {
    this.addValueButton.addEventListener('click', () => {
      const inputs = this.getInputs();
      onSubmitHandler(...inputs);
    });
  }

  onAppLoad(onAppLoadHandler, alertService) {
    alertService.hideError();
    onAppLoadHandler();
  }
}
