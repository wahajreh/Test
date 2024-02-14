import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEditProductComponent } from './create-edit-product/create-edit-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './interceptor/api-interceptor';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/elements/navbar/navbar.component';
import { FooterComponent } from './components/elements/footer/footer.component';
import { HomeComponent } from './components/elements/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEditProductComponent,
    ProductListComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,        // Import FormsModule for template-driven forms
    ReactiveFormsModule,HttpClientModule
  ],
  providers: [    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
