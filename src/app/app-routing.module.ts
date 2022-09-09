import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  

const routes: Routes = [
  
  { 
    path: '',
    loadChildren: () => import('./../app/controls/controls.module').then( m => m.ControlsModule )
  }, 
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot( routes  )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }