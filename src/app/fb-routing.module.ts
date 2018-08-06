import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FrontComponent } from './front/front.component';
import { AppComponent } from './app.component';

import { FbButtonComponent } from './fb-button/fb-button.component'


const routes: Routes = [
  { 
    path: '', 
    component:FbButtonComponent
  },
  
  {
    path:'frontcomponent',
    component:FrontComponent
  }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: []
})
export class FbRoutingModule { }
