import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private backendUrl = 'https://booksouls-75d72-default-rtdb.firebaseio.com/'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  submitSignInForm(formData: any) {
    let url:string =this.backendUrl+"users.json"
    return this.http.post(url, formData);
  }
}
