import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbService {


  constructor(private http: HttpClient) { }

  //GET
  getAlumnos(){
    return this.http.get('https://alumnos33-4dcfd-default-rtdb.firebaseio.com/alumnos.json');
  }

  //POST
  postAlumno(Alumno:any){
    return this.http.post('https://alumnos33-4dcfd-default-rtdb.firebaseio.com/alumnos.json', Alumno);
  }
  }