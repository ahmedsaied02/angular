import { Component, OnInit } from '@angular/core';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
@Component({
  selector: 'app-swiper-main',
  templateUrl: './swiper-main.component.html',
  styleUrls: ['./swiper-main.component.css']
})
export class SwiperMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
