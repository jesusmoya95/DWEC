import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
@Input() titulo: string;
@Input() contenido: string;

  constructor() { }

  ngOnInit() {
  }

}
  