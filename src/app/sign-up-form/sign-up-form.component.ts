import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { passwordMatchValidator } from '../validators/matchPass.validators';
import { passVal } from '../validators/passVal.validators';


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
    this.signUpForm = fb.group({
      Email: ['', [Validators.required, Validators.email]],

      password: ['', [Validators.minLength(8), Validators.required,passVal]],
      Cpassword: ['' ]
    },{validator: passwordMatchValidator});
  }
  get signUpFormGetter() {
    return this.signUpForm.controls;
  }
  
  ngOnInit(): void {}
  onSubmit() {
    console.log(this.signUpForm.value);
  }
}
