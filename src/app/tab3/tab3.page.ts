import { NgForm } from '@angular/forms';
import { Component, Input , Output, EventEmitter, OnChanges, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Database, set, ref, update, getDatabase } from 'firebase/database';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }
  onSubmit(agregarAlumno: NgForm){
    const db = getDatabase();
    set(ref(db, 'alumnos/'+ this.matricula),{
      "nombre": this.nombre,
      "apellido": this.apellido,
      "matricula": this.matricula,
      "imagen": "assets/loguito.jpg"
    });
    window.location.reload();
    this.clear();
  }

  @Input() nombre: string = "";
  @Input() apellido: string = "";
  @Input() matricula: string = "";

    nuevoAlumno: any = {};

    clear(){
      this.nombre = "";
      this.apellido = "";
      this.matricula = "";
    }
}