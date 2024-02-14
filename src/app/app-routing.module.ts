import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateEditProductComponent } from './create-edit-product/create-edit-product.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/elements/home/home.component';

const routes: Routes = [{ path: '', component: LayoutComponent ,children:[
  {path:'',component:HomeComponent}
]},
{ path: 'create', component: CreateEditProductComponent },
{ path: 'edit/:id', component: CreateEditProductComponent },]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
