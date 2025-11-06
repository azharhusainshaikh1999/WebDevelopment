import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ProductPage } from './product-page/product-page';
import { UsersPage } from './users-page/users-page';
import { CompanyPage } from './company-page/company-page';

export const routes: Routes = [
{
    path: 'company-page',
    component: CompanyPage
},
{
    path: 'user-page',
    component: UsersPage
},
{
    path: 'product-page',
    component: ProductPage
}
];
