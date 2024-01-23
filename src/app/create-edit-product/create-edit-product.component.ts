import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  id: any;
  editMod: boolean=false;

  constructor(private fb: FormBuilder,private crudService: HttpService,private route: ActivatedRoute,private router: Router) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50),this.customValidator()]],
      description: ['', [Validators.required, Validators.maxLength(200)]],
      category: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0.01)]],
      quantity: [null, [Validators.required, Validators.min(1)]],
    });
   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];

      if (this.id) {
        this.editMod = true;
      }
      else{
        this.editMod==false
      }
      
      // Do something with the retrieved ID
      console.log('ID:', this.id);});
      this.getProductById()
  }

  private buildForm(): void {
    
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      // Process the form data (save to database, etc.)
      console.log(this.productForm.value);
      if (this.editMod) {
        this.editItem(this.id,this.productForm?.value)
      } else {
        this.createItem(this.productForm?.value)
      }
    } else {
      // Form is invalid, display error messages or handle accordingly
    }
  }
  createItem(newItemData:any): void {
    var payload = {"Name":newItemData?.name , 
    "Description":newItemData?.description,  
    "Price":newItemData?.price  ,
    "Quantity":newItemData?.quantity , 
    "Category":newItemData?.category}
    this.crudService.createItem(payload).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  editItem(itemId: number,newItemData:any): void {
    var payload = {"Name":newItemData?.name , 
    "Description":newItemData?.description,  
    "Price":newItemData?.price  ,
    "Quantity":newItemData?.quantity , 
    "Category":newItemData?.category,
  "ProductId":itemId}
    this.crudService.editItem(itemId, payload).subscribe(() => {
      this.router.navigate(['/']);
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
  getProductById(){
    this.crudService.getItemById(this.id).subscribe(x=>{
      console.log("🚀 ~ CreateEditProductComponent ~ this.crudService.getItemById ~ x:", x)
      this.productForm.patchValue(x);
    })
  }
  customValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value: string = control.value;
  
      // Check for spaces
      if (/\s/.test(value)) {
        return { hasSpace: true };
      }
  
      // Add other conditions as needed
  
      // If all conditions are met, return null (no validation error)
      return null;
    };
  }
}
