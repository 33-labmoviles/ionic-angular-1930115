import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.scss'],
})
export class AlumnoDetalleComponent implements OnInit {

  constructor(
    private ruta: ActivatedRoute, 
    public actionSheetC: ActionSheetController) { }

  ngOnInit() {
    this.obtenerDetalleAlumno(this.matricula);
  }

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

  alumnoDetalle:  any={};
  matricula: string = this.ruta.snapshot.params.id;
  obtenerDetalleAlumno(matricula: string): any{
    console.log(matricula);

  for(let i=0; i<this.alumnos.length;i++){
    if(matricula==this.alumnos[i].matricula){
      this.alumnoDetalle=this.alumnos[i];
      }
    }

    return this.alumnoDetalle;
  }

  async mostrarActionSheet(){
    const actionSheet = await this.actionSheetC.create({
      header: 'Opciones',
      cssClass: 'mi-primer-action-sheet',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        data: 10,
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

}
