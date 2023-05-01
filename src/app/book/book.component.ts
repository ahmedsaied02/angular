import { Component, OnInit ,Input} from '@angular/core';
import { Book } from '../app.component';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input()  item:Book={
    name: "",
    id:"",
    price:""
  };
  
  constructor() {
    
   }
  
  ngOnInit(): void {
  }
  addToCart(){
    console.log("added");
    // export the object to the cart page
    
  }
}
