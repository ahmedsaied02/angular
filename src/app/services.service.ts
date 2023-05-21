import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Book } from './app.component';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable, Subscription, map } from 'rxjs';
import { filter } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ServicesService implements OnInit {
  data: Observable<Array<Book>>;

  constructor(public afs: AngularFirestore) {
    this.data = this.afs
      .collection<Book>('books')
      .snapshotChanges()
      .pipe(
        map((snapshot) =>
          snapshot.map((value, i) => {
            let val = value.payload.doc;
            return { ...val.data(), id: val.id };
          })
        )
      );
  }

  ngOnInit() {}
  getFeaturedBooks() {
    
    return this.data.pipe(map((books)=>books.filter((book)=>book.featured)));
  }
  getNewlyAddedBooks() {
    return this.data.pipe(map((books)=>books.filter((book)=>!book.featured)));
  }
  gerBookById(id: string) {
    let item: Observable<Book> ;

    item= this.data.pipe(map((value) => value.find((book)=>book.id===id)));
    return item
  }
}
