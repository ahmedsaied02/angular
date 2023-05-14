import { Component, OnInit } from '@angular/core';

import { Book } from '../app.component';
import { CartServiceService } from '../cart-service.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  myMap = new Map<number,{book:Book, count:number}>();
  constructor(private carts :CartServiceService) { 
    
    
  }

  ngOnInit(): void {
   this.myMap= this.carts.reciveData()
  }
  delete($event:number){
    
    this.myMap.delete($event)
  }
}
