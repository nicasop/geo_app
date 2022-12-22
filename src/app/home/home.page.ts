import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AlertController } from '@ionic/angular';
import { DataLocalService } from '../services/data-local.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lat!: number;
  lon!: number;
  user!: string;
  pwd!: string;

  constructor( public geo: Geolocation, private alertCon: AlertController, private data: DataLocalService) {}

  ubicacion(){
    this.geo.getCurrentPosition().then( resp => {
      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);
      this.lat = resp.coords.latitude; 
      this.lon = resp.coords.longitude; 
      this.showAlert();
    } )
  }

  async showAlert() {
    const alert = await this.alertCon.create({
      cssClass: 'my-custom-class',
      header: 'GEOLOCATION',
      subHeader: 'Position',
      message: 'Latitud: ' + this.lat + ' Longitud: ' + this.lon,
      buttons:[
        {
          text: 'CANCELAR'
        },
        {
          text: 'GUARDAR',
          handler: () => {
            this.data.savePosition(this.lat,this.lon);
          },
        }
      ]
    })
    await alert.present();
  }

  validate(){
    console.log(this.user);
    console.log(this.pwd);
    this.data.validateCredentials(this.user,this.pwd);
  }

  saveCredentials(){
    this.data.saveCredentials(this.user,this.pwd);
  }
}
