import { Component, OnInit } from '@angular/core';
import { NgControl, NgForm } from '@angular/forms';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {
  showPassword = false;
  faEye=faEye;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(f:NgForm){
    console.log(f.value);
    
  }
  changed(email:NgControl){
    console.log(email.invalid);
    
  }
}
