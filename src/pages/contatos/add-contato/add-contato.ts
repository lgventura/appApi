import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddContatoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-contato',
  templateUrl: 'add-contato.html',
})
export class AddContatoPage {
  id : string;
  nome :string;
  sobrenome : string;
  email : string;
  telefone :string;

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams
     ) {
      this.id = this.navParams.get('id')
      this.nome = this.navParams.get('nome')
      this.sobrenome = this.navParams.get('sobrenome')
      this.email = this.navParams.get('email')
      this.telefone = this.navParams.get('telefone')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddContatoPage');
  }

}
