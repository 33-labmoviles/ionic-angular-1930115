import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { getDatabase, onValue, ref, remove, set, update } from 'firebase/database';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page{

  constructor() {}

  ngOnInit(): void {
    const database = getDatabase();
    const auxalumno = ref(database, 'alumnos/');
    onValue(auxalumno, (aux) => {
      this.Alumnos = aux.val();
      this.Alumnos = Object.values(this.Alumnos);
    });
  }

  eliminar(cont: any): any{
    const database = getDatabase();
    remove(ref(database, 'alumnos/'+cont.matricula));
    window.history.back();window.location.reload();
  }

  editar(cont:any){
    this.editando = !this.editando;
    this.indice=cont;
  };

  guardar(): any{
    const db = getDatabase();
    update(ref(db, 'alumnos/'+ this.indice.matricula),{
      apellido: this.apellido,
      imagen: "assets/loguito.jpg",
      matricula: this.indice.matricula,
      nombre: this.nombre
      });
    window.location.reload();
    this.clear();
  }
  
  indice: any={};
  editando: boolean = false;
  Alumnos: any = [];

  @Input() nombre: string ="";
  @Input() apellido: string ="";

  clear(): void{
    this.nombre="";
    this.apellido="";
    this.editando=false;
    this.indice='';
  }
}
