import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ContatosServiceProvider } from '../../../providers/contatos-service/contatos-service';
import { MensagensServiceProvider } from '../../../providers/mensagens-service/mensagens-service';

/**
 * Generated class for the AddMensagemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-mensagem',
  templateUrl: 'add-mensagem.html',
})
export class AddMensagemPage {
  descricao;
  contatos_id;
  id;
  contatos: Array<any> = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public contatosService: ContatosServiceProvider,
    public mensagemService: MensagensServiceProvider
  ) {
    this.id = this.navParams.get('id')
    if(this.id != null){
      this.descricao = this.navParams.get('descricao')
    }

    this.getContatos();
  }

  getContatos(){
    this.contatosService.listaContatos().subscribe(
      data => {
        this.contatos = data;
        console.log(this.contatos);
        
      },
      erro => {
        console.log(erro);
        
      }
    )
  }

  salvar(){
    let dados = new FormData();

    dados.append('descricao', this.descricao);

    if(this.id == null){
      this.mensagemService.salvaMensagem(dados, this.contatos_id).subscribe(
        data => {
          console.log(data);
          this.navCtrl.pop();
        },
        erro => {
          console.log(erro);
          
        }
      );
    }else {
      this.mensagemService.editaMensagem(this.id, dados).subscribe(
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
