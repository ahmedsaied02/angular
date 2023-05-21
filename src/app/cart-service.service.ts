import { Injectable } from '@angular/core';
import { Book } from './app.component';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  myMap = new Subject<Map<string,{book:Book, count:number}>>();
  map = new Map<string,{book:Book, count:number}>()
  constructor() { 
    
  }
  
  saveData(book:Book){
    let count = this.map.get(book.id)?.count??1
    this.map.set(book.id,{book:book,count:count})
    this.myMap.next(this.map)
    
  
      
      
    
  }
  reciveData(){
    return this.map;
  }
  myVariable = new BehaviorSubject<number>(0);
  total = this.myMap.pipe(map((x)=>{
    let total = 0
    for(let book of x.values()){
      total+=book.count
    }return total
  }))
  subtractNumber(book: string) {
    this.map.get(book).count -=1
    this.myMap.next(this.map)
  }
  addNumber(book: string){
    this.map.get(book).count +=1
    this.myMap.next(this.map)
  }
  delete(bookId:string){
    this.map.delete(bookId)
    this.myMap.next(this.map)
  }

}
