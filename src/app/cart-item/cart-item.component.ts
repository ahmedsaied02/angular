import { Component, OnInit ,Input,Output, EventEmitter} from '@angular/core';
import { faTrash,faPlus,faMinus} from '@fortawesome/free-solid-svg-icons';
import { FormControl,FormsModule,FormGroup,Validators } from '@angular/forms';
import { Book } from '../app.component';
import { CartServiceService } from '../cart-service.service';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input()  item?:{book:Book,count:number};
  @Output() deleteEmitter = new EventEmitter <string>;
  constructor(private carts :CartServiceService) {
    
  
   }
  faTrash = faTrash;
  faPlus=faPlus;
  faMinus=faMinus;
  num:number
  
 
  
  
  
  increment() {
    this.carts.addNumber(this.item?.book.id)
    this.num+=1
  }

  decrement() {
    this.carts.subtractNumber(this.item?.book.id)
    this.num-=1
  }
  
  ngOnInit(): void {
    
    this.num=this.item?.count??1; 
    
  }
  
  delete(item:any){
    
    this.deleteEmitter.emit(item.book.id);
    
    
    
  }
}
