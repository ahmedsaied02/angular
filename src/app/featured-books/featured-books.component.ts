import { Component, OnInit } from '@angular/core';
import { Book } from '../app.component';
import { ServicesService } from '../services.service';
import { CartServiceService } from '../cart-service.service' ;

@Component({
  selector: 'app-featured-books',
  templateUrl: './featured-books.component.html',
  styleUrls: ['./featured-books.component.css']
})

export class FeaturedBooksComponent implements OnInit {
  BookDataSent:Book|undefined;
  constructor( private services :ServicesService,private carts :CartServiceService) { }
  data= this.services.getFeaturedBooks()
  ngOnInit(): void {
  }
  recieve($event:Book){
    
    this.carts.saveData($event);
    this.carts.total();
  }
  
  
}
