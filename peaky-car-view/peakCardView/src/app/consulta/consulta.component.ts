import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  title = 'Consultar';

  public consulta = [
    { name: 'Lauro' },
    { name: 'Roberto' },
    { name: 'Ronaldo' },
    { name: 'Rodrigo' },
    { name: 'Alexandre' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
