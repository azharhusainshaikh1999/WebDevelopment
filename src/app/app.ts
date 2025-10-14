import { Component, signal } from '@angular/core';
import { ProductPage } from "./product-page/product-page";
import { UsersPage } from "./users-page/users-page";

@Component({
  selector: 'app-root',
  imports: [ProductPage, UsersPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
