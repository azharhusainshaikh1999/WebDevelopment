import { Component } from '@angular/core';
import { GridLayout } from "../controller/grid-layout/grid-layout";
import { DialogBox } from '../controller/dialog-box/dialog-box';

@Component({
  selector: 'app-users-page',
  imports: [GridLayout, DialogBox],
  templateUrl: './users-page.html',
  styleUrl: './users-page.css'
})
export class UsersPage {
showDialog: boolean = false;
handleDialogResult(result: boolean) {
  this.showDialog = false;
  if (result) {
    console.log('User clicked Confirm');
  } else {
    console.log('User clicked Cancel');
  }
}
  myColumns = [
    { field: 'id', header: 'ID', width: '100px' },
    { field: 'name', header: 'Name', width: '200px' },
    { field: 'email', header: 'Email', width: '250px' }
  ];

  myData = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
    { id: 4, name: 'David', email: 'david@example.com' },
    { id: 5, name: 'Eve', email: 'eve@example.com' },
    { id: 6, name: 'Frank', email: 'frank@example.com' },
    { id: 7, name: 'Grace', email: 'grace@example.com' },
    { id: 8, name: 'Heidi', email: 'heidi@example.com' },
    { id: 9, name: 'Ivan', email: 'ivan@example.com' },
    { id: 10, name: 'Judy', email: 'judy@example.com' },
    { id: 11, name: 'Mallory', email: 'mallory@example.com' }
  ];

}
