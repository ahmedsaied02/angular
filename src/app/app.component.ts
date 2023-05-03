import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
export interface Book{
  id:number
  name:string
  price:string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookSouls';

  ngAfterViewInit(): void {

    register();

  }
}
