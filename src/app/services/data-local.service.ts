import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { NavController } from '@ionic/angular';
import { Position } from '../models/position.models';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  historial: Position[] = [];

  constructor(private nativeStorage:NativeStorage, private nav: NavController) { 
    this.cargarDatos();
  }

  async cargarDatos(){
    this.historial = await this.nativeStorage.getItem("historial") || [];
  }

  guardarRegistro( lat: number, lon: number ){
    // this.nav.navigateForward("/historial");
    const nueva_position = new Position(lat,lon);
    this.historial.unshift(nueva_position);
    console.log(this.historial);
    this.nativeStorage.setItem("historial",this.historial);
    this.nav.navigateForward("/historial");
    // this.abrirRecurso(nuevo_registro);
  }

  get Historial(){
    return [...this.historial];
  }
}
