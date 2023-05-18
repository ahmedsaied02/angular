import { Component, OnInit } from '@angular/core';
import { NgControl, NgForm ,FormControl,FormGroup,Validators} from '@angular/forms';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {
  showPassword = false;
  faEye=faEye;
  signInForm:any;
  
  constructor() { 
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
    console.log(this.signInForm.value);
    
  }
 
}
