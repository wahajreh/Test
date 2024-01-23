import { Component } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    // Initialization logic
  }

  editProduct(product: any): void {
    // Placeholder for edit action
    console.log('Edit product:', product);
  }

  deleteProduct(product: any): void {
    // Placeholder for delete action
    console.log('Delete product:', product);
  }
}
