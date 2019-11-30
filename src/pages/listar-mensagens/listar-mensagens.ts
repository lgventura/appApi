import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MensagensServiceProvider } from '../../providers/mensagens-service/mensagens-service';

/**
 * Generated class for the ListarMensagensPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-listar-mensagens',
  templateUrl: 'listar-mensagens.html',
})
export class ListarMensagensPage {
  id;
  mensagens: Array<any> = [];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public mensagensService: MensagensServiceProvider
  ) {
    this.id = this.navParams.get('id');

    this.getMensagens();

  }

  getMensagens(){
    this.mensagensService.listaMensagensPorContato(this.id).subscribe(
      data => {
        this.mensagens = data;
      },
      erro => {
        console.log(erro)
      }
    )
  }

}
