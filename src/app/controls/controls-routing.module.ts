import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InfoelementComponent } from './infoelement/infoelement.component';
import { ChartsComponent } from './charts/charts.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'informacion-elemento', component: InfoelementComponent },
      { path: 'analisis-grafico', component: ChartsComponent }, 
      { path: '**', redirectTo: 'informacion-elemento' }
    ]
  }
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ]
})
export class ControlsRoutingModule { }
