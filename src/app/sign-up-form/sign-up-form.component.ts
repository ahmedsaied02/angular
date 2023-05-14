import { Component, OnInit } from '@angular/core';
import { NgControl, NgForm } from '@angular/forms';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
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
