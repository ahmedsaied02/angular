import { Component, OnInit } from '@angular/core';

import { faEye } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {
  
  faEye=faEye;
  showSignUp=false;
  constructor() { }
  
  ngOnInit(): void {
    
  }
  
}
