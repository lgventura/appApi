import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ContatosServiceProvider } from '../../../providers/contatos-service/contatos-service';

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
     public navParams: NavParams,
     public contatosService: ContatosServiceProvider
     ) {
      this.id = this.navParams.get('id')
      if(this.id != null){
        this.nome = this.navParams.get('nome')
        this.sobrenome = this.navParams.get('sobrenome')
        this.email = this.navParams.get('email')
        this.telefone = this.navParams.get('telefone')
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddContatoPage');
  }

  salvar(){
    let dados = new FormData();

    dados.append('nome', this.nome);
    dados.append('sobrenome', this.sobrenome);
    dados.append('email', this.email);
    dados.append('telefone', this.telefone);

    if(this.id == null){
      this.contatosService.salvaContato(dados).subscribe(
        data => {
          console.log(data);
          this.navCtrl.pop();
        },
        erro => {
          console.log(erro);
          
        }
      );
    }else {
      this.contatosService.editaContato(this.id, dados).subscribe(
        data => {
          console.log(data);
          this.navCtrl.pop();
        },
        erro => {
          console.log(erro);
          
        }
      );
    }
  }

  voltar(){
    this.navCtrl.pop();
  }
}
