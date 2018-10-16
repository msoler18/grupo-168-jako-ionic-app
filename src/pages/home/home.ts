import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SingUpPage } from '../sing-up/sing-up';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  loadRegister(){
    this.navCtrl.setRoot(SingUpPage);
  }
}
