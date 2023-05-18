import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export function passwordMatchValidator(form: FormGroup) {
   
    const password = form.get('password')?.value;
    const confirmPassword = form.get('Cpassword')?.value;
  
    if (password !== confirmPassword && confirmPassword) {
      form.get('Cpassword')?.setErrors({ passwordMatch: true });
    } else {
      form.get('Cpassword')?.setErrors(null);
    }
    if(confirmPassword == ''){
      form.get('Cpassword')?.setErrors({ required: true });
    }
  }