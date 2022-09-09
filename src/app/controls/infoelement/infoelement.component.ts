import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms'; 
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-infoelement',
  templateUrl: './infoelement.component.html',
  styleUrls: ['./infoelement.component.css']
})
export class InfoelementComponent implements OnInit {

  jsonLuminaries:string='';

  checkoutForm = this.formBuilder.group({
   observaciones: '',
   id_luminaria: '',
   punto_luz: '',
   vial: '',
   numero: '',
   lado_via: '',
   distancia_eje: '',
   s1: '',
   s2: '',
   centro_mando: '',
   circuito: '',
   operativa: '',
   altura: '',
   tipo_soporte: '',
   marca_soporte: '',
   modelo_soporte: '',
   estado_soporte: '',
   situacion_soporte: '',
   tamano_brazo: '',
   longitud_brazo: '',
   orientacion_brazo: '',
   tipo_luminaria: '',
   marca_luminaria: '',
   modelo_luminaria: '',
   estado_luminaria: '',
   tipo_lampara: '',
   marca_lampara: '',
   modelo_lampara: '',
   estado_lampara: '',
   cantidad_lamparas: '',
   potencia: '',
   equipo_auxiliar: '',
   situacion_equipo_auxiliar: '',
   orientacion: '',
   alta: '',
   usuario_alta: '',
   fecha_alta: '',
   modificado: '',
   usuario_modificado: '',
   fecha_modificado: '',
   herramienta: '',
   numero_registro: '',
   envio: '',
   fecha_envio: '',
   id_centro_mando: '',
   id_circuito: ''
  });

  isDisabled = true;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) { 
   } 

  ngOnInit(): void { 
    this.dataService.propertiesJson$.subscribe( json => {
      this.jsonLuminaries = json;
      let luminaries = JSON.parse(json); 
      this.checkoutForm.setValue(luminaries); 
    })

  }

  onSubmit(): void { 
  }
}
