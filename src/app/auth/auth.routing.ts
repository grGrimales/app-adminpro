import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from '../pages/pages.component';


const routes: Routes = [
    { 
        path: '', 
        component: PagesComponent,
        children: [
          { path: 'register', component: RegisterComponent },
          { path: 'login', component: LoginComponent },
        ]
      },
];



@NgModule({
    imports: [ RouterModule.forChild( routes) ],
    exports: [ RouterModule ]
})
export class AuthRoutingModule {}
