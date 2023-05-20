import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  productForm: any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required]
    });
  }
  
  onSubmit() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      
    }
  }
  get productFormG() {
    return this.productForm.controls;
  }
  pricer(){
    console.log(this.productForm.controls.price);
    
  }
}
