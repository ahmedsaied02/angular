import { Injectable } from '@angular/core';
import { Book } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  data:Array <Book> =[
    {
      name:"The Art Of Not Giving A F*CK",
      id:1,
      price:"150$"


    },
    {
      name:"ahmed saied",
      id:2,
      price:"Infinity"
    },
    {
      name:"book 2",
      id:3,
      price:"Infinity"
    },
    {
      name:"book 3",
      id:4,
      price:"Infinity"
    } ,
    {
      name:"book 4",
      id:5,
      price:"Infinity"
    }
  ];
  constructor() { }

  getFeaturedBooks(){
    return this.data
  }
  getNewlyAddedBooks(){
    return this.data
  }
  gerBookById(id:number){
    let item:Book|undefined;
    for(let i = 0;i<this.data.length;i++){
      if(this.data[i].id == id){
        item = this.data[i];
      }
    }
    return item
  }
}
