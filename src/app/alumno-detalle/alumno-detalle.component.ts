import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Location, registerLocaleData } from '@angular/common';
import { getDatabase, onValue, ref, remove } from 'firebase/database';
import { Database } from '@angular/fire/database';

@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.scss'],
})

export class AlumnoDetalleComponent implements OnInit {

  constructor(
    private ruta: ActivatedRoute,
    public actionSheetC: ActionSheetController
    ) { }

    ngOnInit() {
      const database = getDatabase();
      const auxalumnodetalle = ref(database, 'alumnos/'+this.matricula);
      onValue(auxalumnodetalle, (aux) => {
        this.alumnoDetalle = aux.val();
      });
    }

    alumnoDetalle: any = {}
    matricula: string = this.ruta.snapshot.params.id;

    eliminar(): any{
      const database = getDatabase();
      remove(ref(database, 'alumnos/'+this.matricula));
      window.history.back();window.location.reload();
    }

    async presentActionSheet() {
      const actionsheet = await this.actionSheetC.create({
        mode:'ios',
        header: 'Opciones',
        buttons: [{
          text: 'Eliminar',
          role: 'destructive',
          icon: 'trash',
          id: 'delete-button',
          data: {
            type: 'delete'
          },
          handler: () => {
            this.eliminar();
            console.log('Elimnidado');
          }
        }]
      });
  
      await actionsheet.present();
      const { role, data } = await actionsheet.onDidDismiss();
      }
}