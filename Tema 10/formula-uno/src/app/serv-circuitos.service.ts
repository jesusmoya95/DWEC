import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServCircuitosService {

  constructor(private ajax:HttpClient) { }

  obtenerdatosTemporadas() :Observable<any>{
    return this.ajax.get('http://ergast.com/api/f1.json?limit=140&offset=858');
  }
  
  obtenerdatosCircuitos() :Observable<any>{
    return this.ajax.get('http://ergast.com/api/f1/circuits.json?limit=123');
  }

  obtenerdatosCircuito(id) :Observable<any>{
    return this.ajax.get('http://ergast.com/api/f1/circuits/'+id+'.json')
  }

  obtenerdatosConductores() :Observable<any>{
    return this.ajax.get('http://ergast.com/api/f1/drivers.json?limit=850');
  }

  obtenerdatosConductor(id) :Observable<any>{
    return this.ajax.get('http://ergast.com/api/f1/drivers/'+id+'.json')
  }

}
