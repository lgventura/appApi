import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MensagensServiceProvider } from '../../providers/mensagens-service/mensagens-service';
import { AddMensagemPage } from './add-mensagem/add-mensagem';

@Component({
  selector: 'page-mensagens',
  templateUrl: 'mensagens.html'
})
export class MensagensPage {
  mensagens : Array<any> =[];
  constructor(
    public navCtrl: NavController,
    public mensagemService: MensagensServiceProvider
  ) {
  }

  ionViewDidEnter() {
    this.getMensagens()
  }


  openAddPage(){
    this.navCtrl.push(AddMensagemPage);
  }

  getMensagens(){
    this.mensagemService.listaMensagens().subscribe(
      data => {
        this.mensagens = data;
        console.log(this.mensagens);
        
      },
      erro => {
        console.log(erro);
        
      }
    )
  }


  editarMensagem(id, descricao){
    this.navCtrl.push(AddMensagemPage, {
      id : id,
      descricao : descricao
    });
  }

  deletar(id){
    this.mensagemService.deletaMensagem(id).subscribe(
      data => {
        console.log(data);
        this.mensagens = [];
        this.getMensagens();
      },
      erro => {
        console.log(erro);
        
      }
    );
  }

}
