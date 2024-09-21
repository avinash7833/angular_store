import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { product } from '../product-list/product';
import { DataHandlerService } from '../data-handler.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  // @Output() sendDataEvent =new EventEmitter<any>();
  form !: FormGroup;

  showNameError: boolean = false;
  msgError: String ='';

  newProduct : product ={
    name: '',
    description: '',
    price: 0,
    counts: '',
    id: 0
  }

  constructor(private dataHandler : DataHandlerService,private http:HttpClient, private fb: FormBuilder) {
    this.form = this.fb.group({
      productName: ['',Validators.required,Validators.minLength(3)],
      description:[''],
      price: ['', [Validators.required]],
      counts: ['',[Validators.required]],
    });
  }

   ngOnInit(): void {
  }

  onClickAddNewProduct(){    
    const newObj :any ={
    name:this.newProduct.name,
    description : this.newProduct.description,
    price : this.newProduct.price,
    counts :2,
  }
    this.dataHandler.PostProduct(newObj).subscribe();
    this.dataHandler.getproduct();
    // this.sendDataEvent.emit(this.newProduct),
    // this.dataHandler.products.push(this.newProduct)
    this.newProduct ={
      id:0,
      name : '',
      description : '',
      price : 0,
      counts : '',
    }
  }

  onClickSumbitForm(){
    console.log(this.form);
    console.log(this.form.controls.productName.value);
    console.log(this.form.get('productName')?.errors);

    if(this.form.get('productName')?.errors){
      this.showNameError = true;
      if(this.form.get('productName')?.errors?.required){
        this.msgError="Name field is required*";
      }
      else if(this.form.get('productName')?.errors?.minLength(3)){
        this.msgError="Name is less than 3 characters*";
      }
    }

    const newProduct: any ={
      name: this.form.controls.productName.value,
      description: this.form.controls.description.value,
      price: this.form.controls.price.value,
      counts: this.form.controls.counts.value
    }
    this.dataHandler.PostProduct(newProduct).subscribe();
    this.dataHandler.getproduct();
    this.form.reset();
    console.log(this.newProduct);
  }
}
