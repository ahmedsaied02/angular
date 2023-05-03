import { Component, OnInit } from '@angular/core';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faTimes,faBars} from '@fortawesome/free-solid-svg-icons';
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  faShoppingBag = faShoppingBag; 
  faTimes=faTimes;
  faBars=faBars;
  faSearchLocation =faSearchLocation;
  ngOnInit(): void {
  }
  navigation = "nonActive";

  showMenu() {
    this.navigation="Active";
  }
  hideMenu() {
    this.navigation = "nonActive";
  }
}
