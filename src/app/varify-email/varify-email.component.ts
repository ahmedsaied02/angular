import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-varify-email',
  templateUrl: './varify-email.component.html',
  styleUrls: ['./varify-email.component.css']
})
export class VarifyEmailComponent implements OnInit {
  userData :firebase.User|undefined|null
  constructor(public authService: LoginService) { }

  ngOnInit(): void {
    
  }

}
