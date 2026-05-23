import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contacts } from './contacts/contacts';
import { About } from './about/about';

export const routes: Routes = [
    {
        path:'', component: Home
    },
    {
        path:'About',component: About
    },
    {
        path:'Contacts', component: Contacts
    }
];
