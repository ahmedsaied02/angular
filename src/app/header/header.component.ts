import { Component, OnInit } from '@angular/core';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faTimes,faBars} from '@fortawesome/free-solid-svg-icons';
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { CartServiceService } from '../cart-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Observable } from 'rxjs';
import { User } from 'firebase/auth'; 
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: Observable<User>;
  constructor(private carts :CartServiceService,private route: Router,private auth:LoginService,private afAuth: AngularFireAuth) { 
    this.user = afAuth.authState; 
  }
  isAdmin =this.auth.isAdmin
  faShoppingBag = faShoppingBag; 
  faTimes=faTimes;
  faBars=faBars;
  faSearchLocation =faSearchLocation;
  totalCartCount:number;
  showHeader: boolean=true;
  currentRoute:string='/';
  ngOnInit(): void {
    this.currentRoute = this.route.url
    
    this.carts.total.subscribe((x)=>{
      this.totalCartCount = x
    })
  }
  navigation = "nonActive";

  showMenu() {
    this.navigation="Active";
  }
  hideMenu() {
    this.navigation = "nonActive";
  }
  signOut(){
    this.auth.SignOut();
  }
}
