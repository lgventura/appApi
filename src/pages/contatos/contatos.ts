import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddContatoPage } from './add-contato/add-contato';

@Component({
  selector: 'page-contatos',
  templateUrl: 'contatos.html'
})
export class ContatosPage {

  contatos : Array<any> = [];

  constructor(
    public navCtrl: NavController
    ) {
      this.contatos = [
        {
          'id' : 1,
          'nome' : 'Luiz',
          'sobrenome' :  'Gustavo ventura',
          'email' : 'luizgventura@hotmail.com',
          'telefone' : '(43)9 9641-7713'
        },
        {
          'id': 2,
          'nome' : 'Gustavo',
          'sobrenome' :  'Luiz ventura',
          'email' : 'luizgventura@hotmail.com',
          'telefone' : '(43)9 9641-7713'
        }
      ]
  }

  openAddPage(){
    this.navCtrl.push(AddContatoPage);
  }

  editContact(id, nome, sobrenome, email, telefone){
    this.navCtrl.push(AddContatoPage, {
      id : id,
      nome : nome,
      sobrenome : sobrenome,
      email : email,
      telefone : telefone
    });
  }

}
