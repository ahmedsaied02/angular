import { Injectable } from '@angular/core';
import { Book } from './app.component';
import { BehaviorSubject, Subject } from 'rxjs';

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
      
      
    
  }
  reciveData(){
    return this.myMap;
  }
  myVariable = new BehaviorSubject<number>(0);
  total(){
     
    let totalNum:number=0;
    for(let value of this.myMap.values()){
      totalNum += value.count;
    }
    
   
    this.myVariable.next(totalNum);
    
    
  }
  subtractNumber(value: number) {
    let lastValue = this.myVariable.value;
    this.myVariable.next(lastValue-value);
  }
  addNumber(value:number){
    let lastValue = this.myVariable.value;
    this.myVariable.next(lastValue+value);
  }
}
