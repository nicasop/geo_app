import { Component, OnInit } from '@angular/core';
import { DataLocalService } from 'src/app/services/data-local.service';
import { Position } from '../../models/position.models';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  historial!: Position[];

  constructor( public dataLocal: DataLocalService) {
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.historial = this.dataLocal.Positions || [];
  }  

}
