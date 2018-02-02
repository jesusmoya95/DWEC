import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {ServCircuitosService} from "../serv-circuitos.service";

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.css']
})
export class ConductorComponent implements OnInit {

  datos:Array<any>=Array();

  constructor(private route: ActivatedRoute, private servicio:ServCircuitosService) { }

  ngOnInit() {
    this.servicio.obtenerdatosConductor(this.route.snapshot.params["idconductor"]).subscribe(
      
      data => {
      // Read the result field from the JSON response.
      console.log(data);    
      this.datos=data.MRData.DriverTable.Drivers[0];
  
      });

  }

}
