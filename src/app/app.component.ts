import { Component } from '@angular/core';
export interface Book{
  id:string
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
}
