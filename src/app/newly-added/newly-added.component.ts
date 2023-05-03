import { Component, OnInit } from '@angular/core';
import { Book } from '../app.component';
import { ServicesService } from '../services.service';
import { CartServiceService } from '../cart-service.service';

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
  data = this.services.getNewlyAddedBooks();
  ngOnInit(): void {}
  recieve($event: Book) {
    this.carts.saveData($event);
    this.carts.total();
  }
}
