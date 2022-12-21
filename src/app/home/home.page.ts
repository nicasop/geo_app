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
          text: 'OK',
          handler: () => {
            console.log('Guardar posicion en el historial');
            this.data.guardarRegistro(this.lat,this.lon);
          },
        }
      ]
    })
    await alert.present();
  }
}
