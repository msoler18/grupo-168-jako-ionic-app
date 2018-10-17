import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RegisterUserPage } from '../register-user/register-user';


@IonicPage()
@Component({
  selector: 'page-sing-up',
  templateUrl: 'sing-up.html',
})
export class SingUpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  loadFormUser(){
    this.navCtrl.setRoot(RegisterUserPage);
  }  

}
