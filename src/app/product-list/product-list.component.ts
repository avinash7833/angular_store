import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { product } from './product';
import { DataHandlerService } from '../data-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  search : String = "";
  allProducts !: product[];
  cart : number = 0;
  constructor(private dataHandler : DataHandlerService, private router: Router) {  
    this.allProducts = dataHandler.products;
  }

ngDoCheck(){
  this.allProducts = this.dataHandler.products;
}
  // @Input() allProducts !: product[];
 

  styles = {
    width : '18rem',
    'box-shadow' : 'rgb(0,0,0,0.24) 0px 3px 8px',
    'margin-top' : '10px',
    height : 'auto',


  };

  newProduct : product ={
    id : 0,
    name : '',
    description : '',
    price : 0,
    counts : ''
  }
  products: any;

  // iphone : product = {
  //   name : "Iphone 15 pro max",
  //   description : "Lorem ipsum natus doloribus similique, unde animi labore, in suscipit quia vel assumenda pariatur porro praesentium, earum neque eius deserunt cum?",
  //   price : 100000,
  //   count : "white"
  // }

  // samsung : product = {
  //   name : "Samsung S23 ultra",
  //   description : "Lorem ipsum consequatur natus doloribus simili, in suscipit quia vel assumenda pariatur porro praesentium, earum neque eius deserunt cum?",
  //   price : 90000,
  //   count : "white"
  // }
  

  ngOnInit(): void {
    this.dataHandler.getproduct();
  }
  

  checkProducts(){
    // return this.products.length === 0;
  }

  checkProductPrice(price:number){
    console.log(price);
    return price <= 90000
    
  }
  onClickAddNewProduct(){
    this.products.push(this.newProduct)
  }

  onclickCart(){
    this.dataHandler.cart++;
  }
  onDeleteProduct(id :number){
    this.dataHandler.deleteProduct(id);
    this.dataHandler.getproduct();
  }

  onClickProduct(id: number){
    this.router.navigate(['product', id]);
  }
}
