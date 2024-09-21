import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';

const route: any =[
  {path:'',component: HomeComponent},
  {path: 'all-products', 
    loadChildren: ()=> import('./feature/feature.module').then(m => m.FeatureModule)
  },
  {path: 'about', component: AboutComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  declarations:[],
  imports: [
    CommonModule,
    RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
