import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class MensagensServiceProvider {
  mensagensUrl = 'http://127.0.0.1:8000/api/mensagens';
  constructor(public http: Http) {
    console.log('Hello MensagensService Provider');

  }

    listaMensagens():Observable<any[]> {
      return this.http.get(this.mensagensUrl).map(res => res.json()).catch(this.erro);
    }

    listaMensagensPorContato(contatos_id):Observable<any[]> {
      return this.http.get(this.mensagensUrl+'/getByContact/'+contatos_id).map(res => res.json()).catch(this.erro);
    }

    salvaMensagem(dados, contatos_id) {
      return this.http.post(this.mensagensUrl+'/save/'+contatos_id, dados).map(res => res.json()).catch(this.erro);
    }

    editaMensagem(id, dados) {
      return this.http.post(this.mensagensUrl+'/edit/'+id, dados).map(res => res.json()).catch(this.erro);
    }

    deletaMensagem(id) {
      return this.http.delete(this.mensagensUrl+'/delete/'+id).map(res => res.json()).catch(this.erro);
    }
  
    erro(error) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
    }
}
