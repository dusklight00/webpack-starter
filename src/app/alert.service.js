export class AlertService {
  constructor() {
    this.errorBox = document.getElementById('error');
  }

  hideError() {
    this.errorBox.classList.add('invisible');
  }

  showError(errorMesage) {
    this.errorBox.innerHTML = errorMesage;
    this.errorBox.classList.remove('invisible');
  }
}
