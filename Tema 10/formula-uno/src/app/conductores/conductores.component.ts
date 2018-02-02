import { Component, OnInit } from '@angular/core';
import {ServCircuitosService} from "../serv-circuitos.service";
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.component.html',
  styleUrls: ['./conductores.component.css']
})
export class ConductoresComponent implements OnInit {

  datos:any;

  constructor(private servicio:ServCircuitosService) { }

  ngOnInit() {this.servicio.obtenerdatosConductores().subscribe(
      
    data => {
    // Read the result field from the JSON response.
    console.log(data);
    console.log(data.MRData.DriverTable.Drivers)  ;  
    this.datos=data.MRData.DriverTable.Drivers;

    })
  }

}
