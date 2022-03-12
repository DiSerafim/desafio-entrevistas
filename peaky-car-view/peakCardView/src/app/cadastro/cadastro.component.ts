import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  title = 'Cadastrar';

  public cadastro = [
    { name: 'Marta' },
    { name: 'Paulla' },
    { name: 'Laura' },
    { name: 'Luiza' },
    { name: 'Lucas' },
    { name: 'Pedro' },
    { name: 'Paulo' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
