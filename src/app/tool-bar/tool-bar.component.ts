import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms'; 

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  @Input() propertiesJson: any;  

  valueProperties:any;

  

  isDisabled = true;

  constructor(
    private formBuilder: FormBuilder,
  ) { 
   }

   ngOnChanges(changes: SimpleChanges) { 
    if(changes.propertiesJson.currentValue != undefined && changes.propertiesJson.currentValue != ""){
      this.valueProperties = changes.propertiesJson.currentValue;
     
    }
 }

  ngOnInit(): void { 
  }

  onSubmit(): void { 
  }

}
