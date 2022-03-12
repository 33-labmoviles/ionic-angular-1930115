import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  alumnos = [
    {
      "nombre": "Brian",
      "apellido": "Esquivel",
      "matricula": "1930115",
      "image": "assets/loguito.jpg"
    },
    {
      "nombre": "Omar",
      "apellido": "Garza",
      "matricula": "1928432",
      "image": "assets/loguito.jpg"
    },
    {
      "nombre": "Sergio",
      "apellido": "Gutiérrez",
      "matricula": "1929456",
      "image": "assets/loguito.jpg"
    },
    {
      "nombre": "Diego",
      "apellido": "Jasso",
      "matricula": "1930103",
      "image": "assets/loguito.jpg"
    },
    {
      "nombre": "Ángel",
      "apellido": "Rodríguez",
      "matricula": "1930238",
      "image": "assets/loguito.jpg"
    }
  ];

}
