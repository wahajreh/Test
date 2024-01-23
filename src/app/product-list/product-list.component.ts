import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  title = 'Test';
  products = [
    { name: 'Product 1', description: 'Description 1', category: 'Electronics', price: 49.99, quantity: 10, date: new Date() },
    { name: 'Product 2', description: 'Description 2', category: 'Clothing', price: 29.99, quantity: 5, date: new Date() },
    // Add more products as needed
  ];

  constructor(private crudService: HttpService,private router: Router) { }

  ngOnInit(): void {
    // Initialization logic
    this.loadItems();
  }
  loadItems(): void {
    this.crudService.getAllItems().subscribe(data => {
      this.products = [];
      this.products = data;
      console.log("🚀 ~ ProductListComponent ~ this.crudService.getAllItems ~ this.products :", this.products )
    });
  }

  editProduct(product: any): void {
    // Placeholder for edit action
    console.log('Edit product:', product);
    this.router.navigate(['/edit/'+product?.productId]);
    
  }

  deleteProduct(product: any): void {
    // Placeholder for delete action
    console.log('Delete product:', product);
    this.crudService.deleteItem(product?.productId).subscribe(x=>{
this.loadItems();
    })
  }
}
