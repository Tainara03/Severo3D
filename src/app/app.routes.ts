import { Router, RouterModule, Routes } from '@angular/router';
import { AboutComponent, ContactComponent, HomeComponent, ProductsComponent, ServicesComponent } from './pages';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent }
];
