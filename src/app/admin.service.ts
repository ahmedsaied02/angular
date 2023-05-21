import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentData } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { Book } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private dbPath = '/books';

  BooksRef: AngularFirestoreCollection<Book>;

  constructor(private db: AngularFirestore) {
    this.BooksRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Book> {
    return this.BooksRef;
  }

  create(Book: any): any {
    return this.BooksRef.add({ ...Book });
  }

 

  delete(id: string): Promise<void> {
    return this.BooksRef.doc(id).delete();
  }
  
}
