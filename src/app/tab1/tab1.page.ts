import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  alumnos = [
    {
      "nombre": "Brian",
      "apellido": "Esquivel",
      "matricula": "1930115"
    },
    {
      "nombre": "Omar",
      "apellido": "Garza",
      "matricula": "1928432"
    },
    {
      "nombre": "Sergio",
      "apellido": "Gutiérrez",
      "matricula": "1929456"
    },
    {
      "nombre": "Diego",
      "apellido": "Jasso",
      "matricula": "1930103"
    },
    {
      "nombre": "Ángel",
      "apellido": "Rodríguez",
      "matricula": "1930238"
    }
  ];

  @Input() nombre: string = "";
  @Input() apellido: string = "";
  @Input() matricula: string = "";


  agregarAlumno(): void{

    var nuevoAlumno: any = {
      "nombre": this.nombre,
      "apellido": this.apellido,
      "matricula": this.matricula
    }
    this.alumnos.push(nuevoAlumno);
  }
}