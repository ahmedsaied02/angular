import { Component, OnInit } from '@angular/core';

import { Book } from '../app.component';
import { CartServiceService } from '../cart-service.service';
import { Observable ,map} from 'rxjs';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
 
  constructor(private carts :CartServiceService) { 
    
    
  }
  myMap = this.carts.reciveData()
  total=this.carts.total
  ngOnInit(): void {
    
  }
  delete($event:string){
    this.carts.delete($event)
    
  }
}
