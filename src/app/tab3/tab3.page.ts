import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  nombre: string = "";
  appellido: string = "";
  matricula: string = "";

  onSubmit(agregarAlumno: NgForm){
    console.log("Submit")
  }
}
