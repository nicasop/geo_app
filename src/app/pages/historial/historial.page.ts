import { Component, OnInit } from '@angular/core';
import { DataLocalService } from 'src/app/services/data-local.service';
import { Position } from '../../models/position.models';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  histo: Position[] = [];

  constructor( public data: DataLocalService) {
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.histo = this.data.historial;
    console.log(this.histo);
    
  }
  

}
