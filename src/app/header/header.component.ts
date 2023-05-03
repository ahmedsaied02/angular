import { Component, OnInit } from '@angular/core';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faTimes,faBars} from '@fortawesome/free-solid-svg-icons';
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private carts :CartServiceService) { }
  faShoppingBag = faShoppingBag; 
  faTimes=faTimes;
  faBars=faBars;
  faSearchLocation =faSearchLocation;
  totalCartCount:number=0;
  ngOnInit(): void {
    this.carts.myVariable.subscribe(value => {
      this.totalCartCount = value;
    });
  }
  navigation = "nonActive";

  showMenu() {
    this.navigation="Active";
  }
  hideMenu() {
    this.navigation = "nonActive";
  }
}
