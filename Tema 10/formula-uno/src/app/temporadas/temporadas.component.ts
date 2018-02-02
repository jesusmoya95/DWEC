import { Component, OnInit } from '@angular/core';
import {ServCircuitosService} from "../serv-circuitos.service";


@Component({
  selector: 'app-temporadas',
  templateUrl: './temporadas.component.html',
  styleUrls: ['./temporadas.component.css']
})
export class TemporadasComponent implements OnInit {

  datos:Array<any>=Array();

  constructor(private servicio:ServCircuitosService) { }

  ngOnInit() {console.log(this.servicio.obtenerdatosTemporadas().subscribe(
      
    data => {
    // Read the result field from the JSON response.    
    this.datos=data.MRData.RaceTable.Races;
    console.log(data);

    })
  );
  }

}
