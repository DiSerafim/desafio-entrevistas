import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {

  // constructor(private http: HttpClient) { }

  // private REST_API_SERVER = "https://api-monolitico-para-angular.herokuapp.com/carros.json";

  // public carros = []

  ngOnInit(): void {
    // this.http.get(this.REST_API_SERVER).subscribe((data: any[]) => {
    //   this.carros = data;
    // });
  }

}
