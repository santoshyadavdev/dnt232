import { NgModule } from '@angular/core';
import { DntCoreComponent } from './dnt-core.component';
import { ProductComponent } from './product/product.component';



@NgModule({
  declarations: [DntCoreComponent, ProductComponent],
  imports: [
  ],
  exports: [DntCoreComponent, ProductComponent]
})
export class DntCoreModule { }
