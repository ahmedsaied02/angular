import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services.service';
import { Book } from '../app.component';
import { CartServiceService } from '../cart-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id:any;
  item: Observable<Book>;
  value:Book;
  constructor(private route:ActivatedRoute,private service:ServicesService,private cart:CartServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value=>{
      this.id =value.get('id');
      this.item=this.service.gerBookById(this.id);
      this.item.subscribe((value)=>this.value=value)
      console.log(this.value);
      
    })
  }
  addToCart(item:any){
    this.cart.saveData(item);
    
  }

}
