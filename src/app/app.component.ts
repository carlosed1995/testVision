import { Component } from '@angular/core';
import { circleMarker, geoJSON, GeoJSONOptions, LatLng, LatLngBounds, Layer, Map, MapOptions, tileLayer, TileLayer } from 'leaflet';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
   
  public map:Map;

  public mapOptions:MapOptions = {
    zoom: 17,
    zoomControl: false,
    center: [40.395347, -3.694041],
    preferCanvas: true
  };

  public baseLayer:TileLayer;
  public luminairesPropertiesJson:string=''; 

  public  mapFitBounds:LatLngBounds = new LatLngBounds([
    [37.50547228, -4.22810257],
    [37.70590845000001, -3.98959274]
  ]);

  public constructor( private dataService:DataService )
  {
    
    this.baseLayer = tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      crossOrigin: 'anonymous',
      className: 'OSM',
      maxNativeZoom: 19,
      maxZoom: 22,
      minZoom: 5
    });

    this.dataService.propertiesJson$.subscribe( json => {
      this.luminairesPropertiesJson = json
    }) 

  }

  public onMapReady(map:Map):void
  {
    this.map = map;
    this.addLuminairesLayer();
  }

  private async addLuminairesLayer():Promise<void>
  {
    let that = this;
    const luminaires = await (await fetch('assets/data/luminarias.geojson')).json();

    const options:GeoJSONOptions = {
      pointToLayer: (feature:GeoJSON.Feature, latLng:LatLng) => circleMarker(latLng),
      style: feature =>  ({
        radius: 8, 
        color: "#333",
        fillColor: "#FFFA4D",
        weight: 1, 
        opacity: 1,
        fillOpacity: 1
      }) 
    };

      var geoDataJson = geoJSON(luminaires, options,
      ).addTo(this.map);

      //set zoom and selector
      this.map.on('click', (e) => {
        var coord = e.latlng;
        var lat = coord.lat;
        var lng = coord.lng;
        console.log('You clicked the map at latitude: ' + lat + ' and longitude: ' + lng);

        var map =  circleMarker([lat, lng]).addTo(this.map);
        var zoom = 18;
        that.map.setView([lat, lng], zoom);
  
    }); 

    //set properties luminaires
    geoDataJson.on('click', function (e:any) {
        that.luminairesPropertiesJson = JSON.stringify(e.layer.feature.properties); 
        that.dataService.propertiesJson$.emit(that.luminairesPropertiesJson);
    });


  }
 
}
