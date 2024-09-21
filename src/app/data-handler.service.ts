import { Injectable } from '@angular/core';
import { product } from './product-list/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {
  apiUrl = "http://127.0.0.1:8000/"
  constructor(private http : HttpClient) { }

  cart : number = 0;

  products : product[] = [];
    getproduct(){
      return this.http.get(this.apiUrl).subscribe(
        (products : any)=>{
          this.products =products;
        }
      )
    }

  deleteProduct(id : number){
    return this.http.delete(this.apiUrl + 'delete/' + id).subscribe(()=>{},err => console.log(err)
    )
  }

  PostProduct(productData : product){
    return this.http.post(this.apiUrl + 'add',productData);
  }

}

  
