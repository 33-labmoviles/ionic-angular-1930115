import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

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
