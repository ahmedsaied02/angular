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
  @Input()  item:{book:Book,count:number}|undefined;
  @Output() deleteEmitter = new EventEmitter <number>;
  constructor(private carts :CartServiceService) {
    
  
   }
  faTrash = faTrash;
  faPlus=faPlus;
  faMinus=faMinus;
  num:number=1; 
  
 
  
  productCount = new FormControl(this.num, [Validators.required, Validators.min(1)]);
  
  increment() {
    let count = this.productCount.value || 0;
    this.productCount.setValue((count ?? 0) + 1);
    this.carts.addNumber(1);
  }

  decrement() {
    let count = this.productCount.value||0;
    if ((count ?? 0) > 1) {
      this.productCount.setValue((count ?? 0) - 1);
    }
    this.carts.subtractNumber(1);
  }
  
  ngOnInit(): void {
    
    this.productCount.setValue(this.item?.count ? this.item?.count:this.num)
  }
  delete(item:any){
    
    this.deleteEmitter.emit(item.book.id);
    this.carts.subtractNumber(item.count);
  }
}
