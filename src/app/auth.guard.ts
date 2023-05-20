import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}
  
  canActivate(): boolean {
    // Check if the user is logged in
    const isLoggedIn = true;

    if (!isLoggedIn) {
      // User is not logged in, redirect to the login page
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}

