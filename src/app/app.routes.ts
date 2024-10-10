import { Routes } from '@angular/router';
import { HeaderComponent } from './models/header/header.component';
import { FooterComponent } from './models/footer/footer.component';

export const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent }
  //{ path: '', redirectTo: '/header', pathMatch: 'full' }
];
