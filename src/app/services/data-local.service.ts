import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { NavController } from '@ionic/angular';
import { Position } from '../models/position.models';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  private historial: Position[] = [];

  constructor(private nativeStorage:NativeStorage, private nav: NavController) { 
    this.getPositions();
  }

  async getPositions(){
    this.historial = await this.nativeStorage.getItem("historial") || [];
  }

  savePosition( lat: number, lon: number ){
    const nueva_position = new Position(lat,lon);
    this.historial.unshift(nueva_position);
    this.nativeStorage.setItem("historial",this.historial);
    this.nav.navigateForward("/historial");
  }

  saveCredentials(user: string, pwd: string){
    localStorage.setItem('user',user);
    localStorage.setItem('pwd',pwd);
  }

  validateCredentials(_user: string, _pwd:string){
    const user = localStorage.getItem("user") || 'admin';
    const pwd = localStorage.getItem("pwd") || 'admin1234';
    if (user == _user && pwd == _pwd){
      console.log('Credenciales Correctas');
    }
    else{
      console.log('Credenciales Incorrectas');
      
    }
  }

  get Positions(){
    return [...this.historial];
  }
}
