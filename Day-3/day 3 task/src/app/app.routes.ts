import { Routes } from '@angular/router';
import { Home } from './component/pages/home/home';
import { About } from './component/pages/about/about';
import { Contacts } from './component/pages/contacts/contacts';
import { Ministers } from './ministers/ministers';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'contacts', component: Contacts },
  {path: 'ministers', component: Ministers},
  { path: '**', redirectTo: '' }
];
 