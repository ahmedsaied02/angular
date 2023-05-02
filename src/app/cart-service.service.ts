import { Injectable } from '@angular/core';
import { Book } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  myMap = new Map<number,{book:Book, count:number}>();
  constructor() { }

  saveData(book:Book){
      const x = this.myMap.get(book.id);
      if(!x){
        this.myMap.set(book.id,{book,count:1})
      }else{
        this.myMap.set(book.id,{book,count:x.count+1})
      }
      console.log(this.myMap);
      
    
  }
  reciveData(){
    return this.myMap;
  }
}
