import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateEditProductComponent } from './create-edit-product/create-edit-product.component';

const routes: Routes = [{ path: '', component: ProductListComponent },
{ path: 'create', component: CreateEditProductComponent },
{ path: 'edit', component: CreateEditProductComponent },]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
