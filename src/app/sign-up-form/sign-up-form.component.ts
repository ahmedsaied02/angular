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
import { LoginService } from '../login.service';
import { Router } from '@angular/router';



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

  constructor(public router: Router,private fb: FormBuilder,private auth:LoginService) {
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
    this.auth.SignUp(this.signUpFormGetter.Email.value,this.signUpFormGetter.password.value).then((response) => {
      this.router.navigate(['']);
      
    })
    .catch((error) => {
      console.error('Error signing up:', error);
    });
    
    
  }
}

