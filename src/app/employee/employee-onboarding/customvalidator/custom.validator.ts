import { AbstractControl, FormGroup } from '@angular/forms';

export class CustomValidator {

  static nameValidator(control: AbstractControl) {
    const name = control.value as string;
    if (name.includes('test')) {
      return { invalidname: true };
    }
    return null;
  }

  static specialChar(chars: string[]) {
    return (control: AbstractControl) => {
      const value = control.value as string;
      for (const c of chars) {
        if (value.includes(c)) {
          return { invalidChar: true };
        }
      }
      return null;
    };
  }

  static passwordValidaor(form: AbstractControl) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors({
        invalidPassword: true
      });
      return { invalidPassword: true };
    }
    return null;
  }
}
