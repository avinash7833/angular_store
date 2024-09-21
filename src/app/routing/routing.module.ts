import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from '../about/about.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { CustomPipe } from '../custom.pipe';
import { DropdownShowDirective } from '../dropdown-show.directive';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductComponent } from '../product/product.component';
import { SearchProductPipe } from '../search-product.pipe';
import { SpinnerComponent } from '../spinner/spinner.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RoutingModule { }

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    // ProductListComponent,
    CustomPipe,
    SearchProductPipe,
    // AddProductComponent,
    DropdownShowDirective,
    SpinnerComponent,
    //ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    //RouterModule.forRoot(route),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
