import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Book } from '../app.component';
import { map } from 'rxjs';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  productForm: any;
  items:any[] 
  constructor(private formBuilder: FormBuilder,private admin:AdminService) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      Price: ['', Validators.required],
      Author: ['', Validators.required],
      Description: ['', Validators.required],
      Imageurl: ['', Validators.required]
    });
    
  }
  
  onSubmit() {
    if (this.productForm.valid) {
      this.admin.create(this.productForm.value).then(() => {
        console.log('Created new item successfully!');
        
      });
      
    }
  }
  
  get productFormG() {
    return this.productForm.controls;
  }
  retrieveData(): void {
    this.admin.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.items = data;
    });
  }
  delete(i:number){
    if(confirm("Are you sure to delete "+this.items[i].name)){
      this.admin.delete(this.items[i].id).then(() => {
        alert("The item was deleted successfully")
      })
      .catch(err => alert(err));
  }
      

    }
      
    
  }

