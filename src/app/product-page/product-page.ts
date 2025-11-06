import { Component } from '@angular/core';
import { GridLayout } from '../controller/grid-layout/grid-layout';
import { DialogBox } from "../controller/dialog-box/dialog-box";
import { InputFields } from '../controller/input-fields/input-fields';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-page',
  imports: [GridLayout, DialogBox, InputFields, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css'
})
export class ProductPage {

  showDialog: boolean = false;
  pendingDelete: any = null;
  // dialog title/message binders
  dialogTitle: string = 'Product DialogBox';
  dialogMessage: string = 'Are you sure you want to proceed?';

  Productform = new FormGroup({
    ProductName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    ProductDescription: new FormControl('', [Validators.required, Validators.minLength(2)]),
    ProductPrice: new FormControl('', [Validators.required, Validators.minLength(1)]),
    ProductQuantity: new FormControl('', [Validators.required, Validators.minLength(1)])
  });

  get ProductName() { return this.Productform.get('ProductName'); }
  get ProductDescription() { return this.Productform.get('ProductDescription'); }
  get ProductPrice() { return this.Productform.get('ProductPrice'); }
  get ProductQuantity() { return this.Productform.get('ProductQuantity'); }

  onSubmit() {
    if (this.Productform.valid) {
      alert('Form Submitted: ' + JSON.stringify(this.Productform.value));
    } else {
      alert('Form Invalid');
    }
  }

  handleDialogResult(result: boolean) {
    this.showDialog = false;
    if (result) {
      console.log('User clicked Confirm');
      if (this.pendingDelete) {
        const idx = this.myData.indexOf(this.pendingDelete);
        if (idx >= 0) this.myData.splice(idx, 1);
        this.pendingDelete = null;
      }
    } else {
      console.log('User clicked Cancel');
    }
    // reset dialog title/message back to defaults
    this.dialogTitle = 'Product DialogBox';
    this.dialogMessage = 'Are you sure you want to proceed?';
  }
  // row pending deletion (used to confirm delete)
  

  onEdit(row: any) {
    console.log('Edit clicked for', row);
  }

  onDelete(row: any) {
    this.pendingDelete = row;
    this.showDialog = true;
    this.dialogTitle = 'Delete Product';
    this.dialogMessage = 'Are you sure you want to Delete the Product?';
  }
  
myColumns = [
  { field: 'id', header: 'ID', width: '' },
  { field: 'name', header: 'Name', width: '' },
  { field: 'price', header: 'Price', width: '' },
  { field: 'category', header: 'Category', width: '' },
  { field: 'stock', header: 'Stock', width: '' },
  { field: 'rating', header: 'Rating', width: '' },
  { field: 'supplier', header: 'Supplier', width: '' },
  { field: 'warranty', header: 'Warranty', width: '' },
  { field: 'discount', header: 'Discount', width: '' },
  { field: 'releaseDate', header: 'Release Date', width: '' },
  { field: 'description', header: 'Description', width: '' },
  { field: 'status', header: 'Status', width: '' },
  { field: 'action', header: 'Action', width: '' },
];

myData = [
  { id: 1, name: 'Product A', price: 50, category: 'Electronics', stock: 100, rating: 4.5, supplier: 'Supplier X', warranty: '2 years', discount: '10%', releaseDate: '2022-01-15', description: 'High-quality electronic product.', status: 'Available', action: 'Edit' },
  { id: 2, name: 'Product B', price: 30, category: 'Electronics', stock: 200, rating: 4.0, supplier: 'Supplier Y', warranty: '1 year', discount: '5%', releaseDate: '2022-02-20', description: 'Affordable electronic product.', status: 'Available', action: 'Edit' },
  { id: 3, name: 'Product C', price: 20, category: 'Electronics', stock: 300, rating: 3.5, supplier: 'Supplier Z', warranty: '6 months', discount: '15%', releaseDate: '2022-03-25', description: 'Budget-friendly electronic product.', status: 'Out of Stock', action: 'Edit' },
  { id: 4, name: 'Product D', price: 40, category: 'Electronics', stock: 150, rating: 4.2, supplier: 'Supplier X', warranty: '2 years', discount: '10%', releaseDate: '2022-04-30', description: 'Mid-range electronic product.', status: 'Available', action: 'Edit' },
  { id: 5, name: 'Product E', price: 60, category: 'Electronics', stock: 80, rating: 4.8, supplier: 'Supplier Y', warranty: '1 year', discount: '5%', releaseDate: '2022-05-15', description: 'High-end electronic product.', status: 'Available', action: 'Edit' },
  { id: 6, name: 'Product F', price: 70, category: 'Electronics', stock: 120, rating: 4.0, supplier: 'Supplier Z', warranty: '6 months', discount: '15%', releaseDate: '2022-06-10', description: 'Premium electronic product.', status: 'Out of Stock', action: 'Edit' },
  { id: 7, name: 'Product G', price: 80, category: 'Electronics', stock: 90, rating: 4.3, supplier: 'Supplier X', warranty: '2 years', discount: '10%', releaseDate: '2022-07-05', description: 'Advanced electronic product.', status: 'Available', action: 'Edit' },
  { id: 8, name: 'Product H', price: 90, category: 'Electronics', stock: 110, rating: 4.6, supplier: 'Supplier Y', warranty: '1 year', discount: '5%', releaseDate: '2022-08-01', description: 'Top-tier electronic product.', status: 'Available', action: 'Edit' },
  { id: 9, name: 'Product I', price: 100, category: 'Electronics', stock: 70, rating: 4.9, supplier: 'Supplier Z', warranty: '6 months', discount: '15%', releaseDate: '2022-09-15', description: 'Ultimate electronic product.', status: 'Out of Stock', action: 'Edit' },
  { id: 10, name: 'Product J', price: 110, category: 'Electronics', stock: 60, rating: 4.7, supplier: 'Supplier X', warranty: '2 years', discount: '10%', releaseDate: '2022-10-20', description: 'Exclusive electronic product.', status: 'Available', action: 'Edit' },
  { id: 11, name: 'Product K', price: 120, category: 'Electronics', stock: 50, rating: 4.4, supplier: 'Supplier Y', warranty: '1 year', discount: '5%', releaseDate: '2022-11-25', description: 'Limited edition electronic product.', status: 'Available', action: 'Edit' },
  { id: 12, name: 'Product L', price: 130, category: 'Electronics', stock: 40, rating: 4.1, supplier: 'Supplier Z', warranty: '6 months', discount: '15%', releaseDate: '2022-12-30', description: 'Collector\'s electronic product.', status: 'Out of Stock', action: 'Edit' },
  { id: 13, name: 'Product M', price: 140, category: 'Electronics', stock: 30, rating: 4.5, supplier: 'Supplier X', warranty: '2 years', discount: '10%', releaseDate: '2023-01-15', description: 'Innovative electronic product.', status: 'Available', action: 'Edit' },
  { id: 14, name: 'Product N', price: 150, category: 'Electronics', stock: 20, rating: 4.2, supplier: 'Supplier Y', warranty: '1 year', discount: '5%', releaseDate: '2023-02-20', description: 'Cutting-edge electronic product.', status: 'Available', action: 'Edit' },
  { id: 15, name: 'Product O', price: 160, category: 'Electronics', stock: 10, rating: 4.8, supplier: 'Supplier Z', warranty: '6 months', discount: '15%', releaseDate: '2023-03-25', description: 'Revolutionary electronic product.', status: 'Out of Stock', action: 'Edit' },
  { id: 16, name: 'Product P', price: 170, category: 'Electronics', stock: 5, rating: 4.9, supplier: 'Supplier X', warranty: '2 years', discount: '10%', releaseDate: '2023-04-30', description: 'State-of-the-art electronic product.', status: 'Available', action: 'Edit' },
  { id: 17, name: 'Product Q', price: 180, category: 'Electronics', stock: 15, rating: 4.6, supplier: 'Supplier Y', warranty: '1 year', discount: '5%', releaseDate: '2023-05-15', description: 'Next-gen electronic product.', status: 'Available', action: 'Edit' },
  { id: 18, name: 'Product R', price: 190, category: 'Electronics', stock: 25, rating: 4.3, supplier: 'Supplier Z', warranty: '6 months', discount: '15%', releaseDate: '2023-06-10', description: 'Futuristic electronic product.', status: 'Out of Stock', action: 'Edit' },
  { id: 19, name: 'Product S', price: 200, category: 'Electronics', stock: 35, rating: 4.0, supplier: 'Supplier X', warranty: '2 years', discount: '10%', releaseDate: '2023-07-05', description: 'Cutting-edge electronic product.', status: 'Available', action: 'Edit' },
  { id: 20, name: 'Product T', price: 210, category: 'Electronics', stock: 45, rating: 4.7, supplier: 'Supplier Y', warranty: '1 year', discount: '5%', releaseDate: '2023-08-01', description: 'High-performance electronic product.', status: 'Available', action: 'Edit' }
];

  myForm = new FormGroup({
  phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10), Validators.maxLength(10)]),
  fullName: new FormControl('', [Validators.required, Validators.minLength(3)])
});

submitForm(){
  alert("Submitted");
}
}


