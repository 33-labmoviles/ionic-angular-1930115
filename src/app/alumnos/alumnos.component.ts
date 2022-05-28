import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})

export class AlumnosComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAlumnos();
  }

  alumnoslista: any = [];

  getAlumnos(){
    return this.http.get('https://alumnos33-4dcfd-default-rtdb.firebaseio.com/alumnos.json').subscribe(res=>{
      const alumnoRes: any=res;
      const alumnosArray=Object.keys(res).forEach((key:any)=>{
      (this.alumnoslista).push(alumnoRes[key]);
     });
   });
  }
}
