import { Component, OnInit } from '@angular/core';
import { Book } from '../app.component';

@Component({
  selector: 'app-featured-books',
  templateUrl: './featured-books.component.html',
  styleUrls: ['./featured-books.component.css']
})

export class FeaturedBooksComponent implements OnInit {

  constructor() { }
  data:Array <Book> =[
    {
      name:"The Art Of Not Giving A F*CK",
      id:"1",
      price:"150$"


    },
    {
      name:"ahmed saied",
      id:"2",
      price:"Infinity"
    },
    {
      name:"ahmed saied",
      id:"2",
      price:"Infinity"
    },
    {
      name:"ahmed saied",
      id:"2",
      price:"Infinity"
    } ,
    {
      name:"ahmed saied",
      id:"2",
      price:"Infinity"
    }
  ];
  ngOnInit(): void {
  }

}
