import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { register } from 'swiper/element/bundle';
export interface Book {
  id: number;
  name: string;
  price: string;
  description:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'BookSouls';
  HeaderAndFooter: boolean = true;
  constructor(private router: Router) {
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
    if(this.router.url.includes('/login')||this.router.url.includes('/about')){
      this.HeaderAndFooter = false
    }else{
      this.HeaderAndFooter = true
    }
    
  }
}
