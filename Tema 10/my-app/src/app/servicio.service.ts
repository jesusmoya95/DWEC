import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ServicioService {

  constructor(private ajax:HttpClient) { }
  cars=["ford", "renault", "vw"];

  obtenerdatos(){
    return this.ajax.get('http://www.rtve.es/api/noticias.json');
  }

}
