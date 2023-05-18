import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export function passVal(control: AbstractControl): ValidationErrors | null {
  const value: string = control.value;
  const containsNumber = value && /\d/.test(value);
  const hasUppercase = value && /[A-Z]/.test(value);
  const containsUnusualSign = value && /[^\w\s]/.test(value);
  if (value && value.indexOf(' ') >= 0) {
    return { containsSpace: true };
  }
  if (value&&!containsNumber) {
    return { containsNumberError: true };
  }
  if (value&&!hasUppercase) {
    return { upperCaseError: true };
  }
  if (value&&containsUnusualSign) {
    return { containsUnusualSign: true };
  }
  return null;
}