import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Book } from './app.component';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable, Subscription, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesService implements OnInit {
  data: Observable<Array<Book>>;

  
   constructor(public afs: AngularFirestore) {
    this.data = this.afs
      .collection<Book>('books')
      .snapshotChanges().pipe(map((snapshot) => 
        snapshot.map((value, i) => {
          let val=value.payload.doc;
          return {...val.data(),id:val.id};
        })
        
      ));
  }
  
   ngOnInit(){
    
  }
  getFeaturedBooks() {
    return this.data;
  }
  getNewlyAddedBooks() {
    return this.data;
  }
  gerBookById(id:number){
    // let item:Book|undefined;
    // for(let i = 0;i<this.data.length;i++){
    //   if(this.data?[i].id == id){
    //     item = this.data[i];

    //   }
    // }
    // return item
    return{
      name:"ahmed",
      id:"g",
      Description:"a",
      Price:10,
      Imageurl:"a7a",
      Author:"ana"
    }
  }
}
