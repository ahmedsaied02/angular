import { Component, OnInit } from '@angular/core';
import { NgControl, NgForm ,FormControl,FormGroup,Validators} from '@angular/forms';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {
  showPassword = false;
  faEye=faEye;
  signInForm:any;
  
  constructor(private login:LoginService) { 
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
    
    this.login.submitSignInForm(this.signInForm.value)
      .subscribe(
        response => {
          // Handle the response from the backend if necessary
          console.log('Form submitted successfully');
        },
        error => {
          // Handle any errors that occur during the HTTP request
          console.error('Error submitting form:', error);
        }
      );
  }
 
}
