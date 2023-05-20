import { Component, OnInit } from '@angular/core';
import { NgControl, NgForm ,FormControl,FormGroup,Validators, FormBuilder} from '@angular/forms';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {
  showPassword = false;
  faEye=faEye;
  signInForm:any;
  
  constructor(public router: Router,private fb: FormBuilder,private auth:LoginService) { 
    this.signInForm = new FormGroup({
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password:new FormControl('',[
        Validators.required
      ])
    });
  }
  passChange(){
    
    
    
  }
  get email(){
    return this.signInForm.get("email");
  }
   get password(){
    return this.signInForm.get("password");
  }
  ngOnInit(): void {
  }
  onSubmit(){
    this.auth.SignIn(this.email.value,this.password.value).then((response) => {
      this.router.navigate(['']);
      
    })
    .catch((error) => {
      console.error('Error signing up:', error);
    });
   
  }
 
}
