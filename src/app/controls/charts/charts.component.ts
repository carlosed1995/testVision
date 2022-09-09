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
  sampleData: any;
  sampleData1: any;
  highcharts = Highcharts;
  arrayLuminaries: any[] = []; 
  series: any[] = [];
  objectArry: any[] = [];
  chartOptions: any;
  catergoryName: any[] = [];

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
 // this.chartOptions = luminaires;
 
  let array = new Array;
  for (let data in luminaires.features) { 
    array.push(luminaires.features[data].properties)
  }

  for (let propertiesJson in array) { 
     this.arrayLuminaries.push(array[propertiesJson]);
    //  array.push(luminaires.features[data].properties)
   }
 //
 

    this.chartInInt(); 

  }

  count(ary:any, classifier:any) {
    classifier = classifier || String;
    return ary.reduce(function (counter:any, item:any) {
        var p = classifier(item);
        counter[p] = counter.hasOwnProperty(p) ? counter[p] + 1 : 1;
        return counter;
    }, {})
}

 

  changed()
  {

  }

  chartInInt() {
    let people = this.arrayLuminaries;
   // console.log(people);
    let count = this.count(people, function (item:any) {
      return item.tipo_soporte
  });
 
   let arrayData:any = [];
   //var json = '';
   const objects:any = {};
    Object.entries(count).forEach(([key, value], index) => { 
     objects[index] = {
       name: key,
       value: value,
     };  
    }); 
    console.log(objects);
    for (const key in objects) {
     if (Object.prototype.hasOwnProperty.call(objects, key)) {
      const element = objects[key]; 
      arrayData.push(objects[key]);  
  }
}
console.log(arrayData)
 

    this.chartOptions = {
      colors: ['#FFD700', '#C0C0C0', '#CD7F32'],
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie' 
      },
      title: {
        text: 'Count',
      },
      series: arrayData,
    };
  }
}
