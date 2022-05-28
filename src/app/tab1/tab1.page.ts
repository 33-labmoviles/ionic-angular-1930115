import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getDatabase, onValue, ref } from 'firebase/database';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor(private http: HttpClient) {}

    ngOnInit(): void {
      const db = getDatabase();
      const auxalumno = ref(db, 'alumnos/');
      onValue(auxalumno, (aux) => {
        this.alumnoslista = aux.val();
        this.alumnoslista = Object.values(this.alumnoslista);
      });
    }
  
    alumnoslista: any =[];
  
}  