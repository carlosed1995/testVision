import { Component, Optional, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);
require('highcharts/modules/heatmap')(Highcharts);
require('highcharts/modules/treemap')(Highcharts);
require('highcharts/modules/funnel')(Highcharts); 

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})

export class ChartsComponent implements OnInit {
  highcharts = Highcharts;
  arrayLuminaries: any[] = []; 
  chartOptions: any;

  title = 'myHighchart';

  selectedValue = 'select_value';

  dataSelect: any = [
    {
      value: "select_value",
      text: "Selecctione un atributo"
    },
    {
      value: "tipo_soporte",
      text: "Tipo soporte"
    },
    {
      value: "tipo_luminaria",
      text: "Tipo luminaria"
    },
    {
      value: "tipo_lampara",
      text: "Tipo lampara"
    }
  ];
 

  ngOnInit() {

    this.getLumunaries();

  }

  private async getLumunaries():Promise<void>
  {
    
    const luminaires = await (await fetch('assets/data/luminarias.geojson')).json(); 
 
    let array = new Array;
    for (let data in luminaires.features) { 
     array.push(luminaires.features[data].properties)
    }

    for (let propertiesJson in array) { 
     this.arrayLuminaries.push(array[propertiesJson]); 
    } 
 
    this.chartInInt(this.selectedValue); 

  }

  count(ary:any, classifier:any) {
    classifier = classifier || String;
    return ary.reduce(function (counter:any, item:any) {
        var p = classifier(item);
        counter[p] = counter.hasOwnProperty(p) ? counter[p] + 1 : 1;
        return counter;
    }, {})
  }

  changed(value:any)
  {
    this.selectedValue = value;
    this.chartInInt(value);
  }

  chartInInt(value:any) {
    let luminaires = this.arrayLuminaries; 
    let count = this.count(luminaires, function (item:any) {
       return item[value];
  });
 
   let arrayData:any = []; 
   const objects:any = {};
    Object.entries(count).forEach(([key, value], index) => { 
     objects[index] = {
      name: key,
       y: value,
     };  
    }); 

    console.log(objects);
    for (const key in objects) {
     if (Object.prototype.hasOwnProperty.call(objects, key)) {
      const element = objects[key]; 
      arrayData.push(objects[key]);  
   }
  }

  this.chartOptions= {
   chart: {
     plotBackgroundColor: null,
     plotBorderWidth: null,
     plotShadow: false,
     type: 'pie'
  },
  title: {
    text: 'Luminarias'
  },
  tooltip: {
    pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
           
        },
        showInLegend: true
    }
  },
  series: [{ 
    colorByPoint: true,
    data: arrayData
  }]
  }; 
   }
 }
