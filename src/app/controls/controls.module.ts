import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ControlsRoutingModule } from './controls-routing.module';
import { ChartsComponent } from './charts/charts.component';
import { InfoelementComponent } from './infoelement/infoelement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { LeafletModule } from '@asymmetrik/ngx-leaflet'; 
import { RouterModule } from '@angular/router';  
import { ToolBarComponent } from '../tool-bar/tool-bar.component';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({ 
  declarations: [
    ChartsComponent,
    InfoelementComponent, 
    ToolBarComponent 
  ],
  imports: [ 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ControlsRoutingModule,
    RouterModule,
    LeafletModule,
    HighchartsChartModule
  ], 
})
export class ControlsModule { }
