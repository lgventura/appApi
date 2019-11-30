import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddContatoPage } from './add-contato/add-contato';
import { ContatosServiceProvider } from '../../providers/contatos-service/contatos-service';
import { ListarMensagensPage } from '../listar-mensagens/listar-mensagens';

@Component({
  selector: 'page-contatos',
  templateUrl: 'contatos.html'
})
export class ContatosPage {
  
  contatos : Array<any> = [];

  constructor(
    public navCtrl: NavController,
    public contatosService: ContatosServiceProvider
    ) {
      
  }

  ionViewDidEnter() {
    this.getContatos()
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

  openAddPage(){
    this.navCtrl.push(AddContatoPage);
  }

  editarContato(id, nome, sobrenome, email, telefone){
    this.navCtrl.push(AddContatoPage, {
      id : id,
      nome : nome,
      sobrenome : sobrenome,
      email : email,
      telefone : telefone
    });
  }

  deletar(id){
    this.contatosService.deletaContato(id).subscribe(
      data => {
        console.log(data);
        this.contatos = [];
        this.getContatos();
      },
      erro => {
        console.log(erro);
        
      }
    );
  }

  verMensagens(id){
    this.navCtrl.push(ListarMensagensPage, {
      id : id
    });
  }

}
