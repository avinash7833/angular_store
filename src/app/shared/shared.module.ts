import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPipe } from '../custom.pipe';
import { SearchProductPipe } from '../search-product.pipe';
import { DropdownShowDirective } from '../dropdown-show.directive';
import { SpinnerComponent } from '../spinner/spinner.component';



@NgModule({
  declarations: [
    CustomPipe,
    SearchProductPipe,
    DropdownShowDirective,
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomPipe,
    SearchProductPipe,
    DropdownShowDirective,
    SpinnerComponent
  ]
})
export class SharedModule {
}
