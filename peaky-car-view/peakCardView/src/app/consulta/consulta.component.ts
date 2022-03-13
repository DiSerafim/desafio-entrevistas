import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  public title = 'Consultar';

  public consulta = [
    { id: 1, name: 'Lauro', discipline: 'Matemática'},
    { id: 2, name: 'Roberto', discipline: 'Física'},
    { id: 3, name: 'Ronaldo', discipline: 'Português'},
    { id: 4, name: 'Rodrigo', discipline: 'Inglês'},
    { id: 5, name: 'Alexandre', discipline: 'Programação'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
