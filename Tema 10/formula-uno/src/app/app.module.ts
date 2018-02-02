import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { PieComponent } from './pie/pie.component';


import { FormsModule } from '@angular/forms';
import {ServCircuitosService} from "./serv-circuitos.service";
import {HttpClientModule} from '@angular/common/http';
import { TemporadasComponent } from './temporadas/temporadas.component';
import { ConductoresComponent } from './conductores/conductores.component';
import { CircuitosComponent } from './circuitos/circuitos.component';
import { RouterModule, Routes } from '@angular/router';
import { CircuitoComponent } from './circuito/circuito.component';
import { ConductorComponent } from './conductor/conductor.component';



const appRoutes: Routes = [
  {path: '', component: CuerpoComponent},
  {path: 'drivers', component: ConductoresComponent},
  {path: 'circuitos', component: CircuitosComponent},
  {path: 'temporadas', component: TemporadasComponent},
  {path: 'circuitos/:idcircuito', component: CircuitoComponent},
  {path: 'drivers/:idconductor', component: ConductorComponent},
  {path: '*', component: CuerpoComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    CuerpoComponent,
    PieComponent,
    TemporadasComponent,
    ConductoresComponent,
    CircuitosComponent,
    CircuitoComponent,
    ConductorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes,{ enableTracing: true })
  ],
  providers: [ServCircuitosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
