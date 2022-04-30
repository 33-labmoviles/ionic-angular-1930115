import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DbService } from '../services/service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  alumno : {
    nombre: "";
    apellido: "";
    matricula: "";
  }
 
  alumno = new FormGroup(){
    nombreAlumno: new FormControl(''),
    apellido: new FormControl(''),
    matricula: new FormControl('')
  }

  constructor(private http: HttpClient, private Db: DbService) {}

  onSubmit(agregarAlumno:NgForm){
    this.Db.postAlumno(this.alumno).subscribe(res=>{
      console.log("Se agregó el alumno con éxito");
    })
  }

}