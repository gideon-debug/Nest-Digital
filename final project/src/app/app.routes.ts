import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Product } from './pages/product/product';
import { Productdetails } from './pages/productdetails/productdetails';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'products', component: Product },
  { path: 'productdetail/:id', component: Productdetails },
  { path: '**', redirectTo: '' }
];
