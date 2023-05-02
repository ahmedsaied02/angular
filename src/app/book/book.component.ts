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
}
