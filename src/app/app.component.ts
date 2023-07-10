import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { register } from 'swiper/element/bundle';
import { User } from 'firebase/auth'; 
export interface Book {
  id: string;
  Author: string;
  Description: string;
  Imageurl: string;
  Price: number;
  name:string;
  featured?:boolean;
} 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'BookSouls';
  HeaderAndFooter: boolean = true;
  user: Observable<User>;
  constructor(private router: Router,private afAuth: AngularFireAuth) {
    this.user = afAuth.authState; 
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.shouldShowHeaderAndFooter();
      }
    });
    
    
  }
  ngOnInit(){
    
    
    
  }
  ngAfterViewInit(): void {
   
    register();
  }
  shouldShowHeaderAndFooter() {
    if(this.router.url.includes('/login')||this.router.url.includes('/about')||this.router.url.includes('/varify-email')||this.router.url.includes('/forgot-password')){
      this.HeaderAndFooter = false
    }else{
      this.HeaderAndFooter = true
    }
    
  }
}
