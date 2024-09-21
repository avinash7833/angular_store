import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from '../data-handler.service';
import { ActivatedRoute } from '@angular/router';
import { product } from '../product-list/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productObj: product ={
    id:0,
    name:'',
    description: '',
    price: 0,
    counts:''
  }
  constructor(private dataHandlerService: DataHandlerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataHandlerService.getproduct()
  }

  ngDoCheck(){
    this.route.params.subscribe(data=>{
      console.log(data);
      this.dataHandlerService.products.map((product)=>{
        console.log(product.id);

        if(product.id=== +data.id){
          this.productObj = product;
          console.log(this.productObj);
        }
      })
    })
  }
}
