import { Component, OnInit ,Input,Output,EventEmitter, Injectable} from '@angular/core';
import { Book  } from '../app.component';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
@Injectable()
export class BookComponent implements OnInit {
  
  @Input()  item:Book|undefined;
  @Output() addToCartEmitter = new EventEmitter <Book>;
  constructor() {
    
   }
  
  ngOnInit(): void {
  }
  addToCart(item:Book){
    this.addToCartEmitter.emit(item)
  }
  buttonColor ="#d2ecf9";
  originalColor:string='';
  changeColor(){
    
    this.originalColor = this.buttonColor;

    
    this.buttonColor = '#1f5f8b';

    
    setTimeout(() => {
      this.buttonColor = this.originalColor;
    }, 200);
  }
}
