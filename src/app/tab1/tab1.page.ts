import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAlumnos();
  }

  alumnos: any = [];

  getAlumnos(){
  return this.http.get('https://alumnos33-4dcfd-default-rtdb.firebaseio.com/alumnos.json').subscribe(res=>{
    this.alumnos = res;
  })
  }
}