import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Database } from '../../services/database.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public database: Database) {
    
  }

}
