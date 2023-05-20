import { Component, OnInit } from '@angular/core';
import { Book } from '../app.component';
import { ServicesService } from '../services.service';
import { CartServiceService } from '../cart-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-newly-added',
  templateUrl: './newly-added.component.html',
  styleUrls: ['./newly-added.component.css'],
})
export class NewlyAddedComponent implements OnInit {
  BookDataSent: Book | undefined;
  constructor(
    private services: ServicesService,
    private carts: CartServiceService
  ) {}
  data:Observable<Array<Book>>;
  ngOnInit(): void {
    this.data = this.services.getNewlyAddedBooks();
  }
  recieve($event: Book) {
    this.carts.saveData($event);
    this.carts.total();
  }
}
