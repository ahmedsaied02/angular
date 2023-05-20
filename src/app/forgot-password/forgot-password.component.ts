import { Component, OnInit } from '@angular/core';

import { LoginService } from '../login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email : string = '';

  constructor(private auth : LoginService) { }

  ngOnInit(): void {
  }

  forgotPassword() {
    this.auth.ForgotPassword(this.email);
    
  }

}