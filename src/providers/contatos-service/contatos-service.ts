import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class ContatosServiceProvider {
  contatosUrl = 'http://127.0.0.1:8000/api/contatos';
  constructor(public http: Http) {
    console.log('Hello ContatosService Provider');

  }

    listaContatos():Observable<any[]> {
      return this.http.get(this.contatosUrl).map(res => res.json()).catch(this.erro);
    }

    salvaContato(dados) {
      return this.http.post(this.contatosUrl+'/save', dados).map(res => res.json()).catch(this.erro);
    }

    editaContato(id, dados) {
      return this.http.post(this.contatosUrl+'/edit/'+id, dados).map(res => res.json()).catch(this.erro);
    }

    deletaContato(id) {
      return this.http.delete(this.contatosUrl+'/delete/'+id).map(res => res.json()).catch(this.erro);
    }
  
    erro(error) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
    }
}
