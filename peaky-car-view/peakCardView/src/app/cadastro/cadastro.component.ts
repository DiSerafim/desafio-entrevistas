import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public title = 'Cadastrar';

  public cadastro = [
    { id: 1, name: 'Marta', lastName: 'Kent', phone: 129843715 },
    { id: 2, name: 'Paulla', lastName: 'Lisboa', phone: 239843715 },
    { id: 3, name: 'Laura', lastName: 'Antonia', phone: 349843715 },
    { id: 4, name: 'Luiza', lastName: 'Maria', phone: 569843715 },
    { id: 5, name: 'Lucas', lastName: 'Machado', phone: 789843715 },
    { id: 6, name: 'Pedro', lastName: 'Alvares', phone: 909843715 },
    { id: 7, name: 'Paulo', lastName: 'José', phone: 109843715 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
