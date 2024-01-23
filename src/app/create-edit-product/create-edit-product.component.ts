import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-create-edit-product',
  templateUrl: './create-edit-product.component.html',
  styleUrls: ['./create-edit-product.component.css']
})
export class CreateEditProductComponent {
  productForm: FormGroup;

  categories = ['Electronics', 'Clothing', 'Books', 'Toys']; // Example categories
Mode: any='Create';
  items: any[]=[];

  constructor(private fb: FormBuilder,private crudService: HttpService) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(200)]],
      category: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0.01)]],
      quantity: [null, [Validators.required, Validators.min(1)]],
      date: [null, Validators.required]
    });
   }

  ngOnInit(): void {
  }

  private buildForm(): void {
    
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      // Process the form data (save to database, etc.)
      console.log(this.productForm.value);
    } else {
      // Form is invalid, display error messages or handle accordingly
    }
  }
  createItem(): void {
    const newItemData = { /* your item data here */ };
    this.crudService.createItem(newItemData).subscribe(() => {
      this.loadItems();
    });
  }

  editItem(itemId: number): void {
    const updatedData = { /* your updated data here */ };
    this.crudService.editItem(itemId, updatedData).subscribe(() => {
      this.loadItems();
    });
  }

  deleteItem(itemId: number): void {
    this.crudService.deleteItem(itemId).subscribe(() => {
      this.loadItems();
    });
  }
  loadItems(): void {
    this.crudService.getAllItems().subscribe(data => {
      this.items = data;
    });
  }
}
