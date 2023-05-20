import { Component, OnInit } from '@angular/core';
import { Book } from '../app.component';
import { ServicesService } from '../services.service';
import { CartServiceService } from '../cart-service.service' ;
import { Observable } from 'rxjs';

@Component({
  selector: 'app-featured-books',
  templateUrl: './featured-books.component.html',
  styleUrls: ['./featured-books.component.css']
})

export class FeaturedBooksComponent implements OnInit {
  BookDataSent:Book;
  constructor( private services :ServicesService,private carts :CartServiceService) { }
  data:Observable<Array<Book>>;
  
  ngOnInit(): void {
    
    this.data= this.services.getFeaturedBooks()
    
   
  }
  recieve($event:Book){
    
    this.carts.saveData($event);
    this.carts.total();
  }
  
  
}
