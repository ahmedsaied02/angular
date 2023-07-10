import { Injectable, NgZone, OnDestroy } from '@angular/core';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { Observable, Subscription, map, switchMap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  userData: Observable<firebase.User>; // Save logged in user data

  isAdmin: Observable<boolean>;
  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    this.userData = this.afAuth.authState;
    this.isAdmin = this.userData.pipe(
      switchMap((user) => {
        

        return afs
          .collection('admins')
          .doc(user.uid)
          .get()
          .pipe(
            map((snapshot) => {
              

              return snapshot.exists;
            })
          );
      })
    );
  }
  // this.afAuth.authState.subscribe((x)=>{
  //   console.log(x);
    
  // })
  // Sign in with email/password
  SignIn(email: string, password: string) {
    
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        if (result.user) {
          this.router.navigate(['']);
        }
      })
      .catch((error) => {
        window.alert(error.message);
      });
      
  }
  // Sign up with email/password
  SignUp(email: string, password: string) {
    console.log('Sign Up', email, password);
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        this.SendVerificationMail(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  // Send email verfificaiton when new user sign up
  SendVerificationMail(user: firebase.User) {
    
    return user
      .sendEmailVerification({
        url: 'https://booksouls-75d72.web.app/',
      })
      .then(() => {
        this.router.navigate(['varify-email']);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  // Reset Forggot password
  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }
  // Returns true when user is looged in and email is verified
  get isLoggedIn(): Observable<boolean> {
    return this.userData.pipe(map((user) => user.emailVerified));
  }
  // get isAdmin(): boolean {
  //   // return this.userData?.metadata
  // }
  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }
  // Auth logic to run auth providers
  AuthLogin(provider: firebase.auth.AuthProvider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.router.navigate(['']);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  // Sign out
  SignOut() {
    return this.afAuth
      .signOut()
      .then(() => {
        this.router.navigate(['login']);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
}
