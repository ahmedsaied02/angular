import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgControl,
  NgForm,
  Validators,
} from '@angular/forms';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { passwordMatchValidator } from '../validators/matchPass.validators';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css'],
})
export class SignUpFormComponent implements OnInit {
  showPassword = false;
  faEye = faEye;
  signUpForm: any;
  passwordReg = '[a-zA-Z]';

  constructor(fb: FormBuilder) {
   this.signUpForm =fb.group({
      Email: ['', [Validators.required, Validators.email]],
      passwordGroup: fb.group({
        password: ['', [
          Validators.required,
          Validators.minLength(8),
        ]],
        Cpassword:['', [
          Validators.required,
        ]]
      }, { validator : passwordMatchValidator })
    });
    
  }
  get signUpFormGetter(){
    return this.signUpForm.controls
  }
  get passwordGroup(){
    return (this.signUpForm.get('passwordGroup') as FormGroup).controls;
  }
  
  ngOnInit(): void {}
  onSubmit() {
    console.log(this.signUpForm.value);
  }
  
}
