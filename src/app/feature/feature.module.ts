import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list/product-list.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { ProductComponent } from '../product/product.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes=[
  {path: "",component:ProductListComponent}
]

@NgModule({
  declarations: [
    ProductListComponent,
    AddProductComponent,
    ProductComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    ProductListComponent,
    AddProductComponent,
    ProductComponent
  ]
})
export class FeatureModule { }
