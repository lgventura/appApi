import { Component } from '@angular/core';

import { ContatosPage } from '../contatos/contatos';
import { MensagensPage } from '../mensagens/mensagens';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  
  tab1 = ContatosPage;
  tab2 = MensagensPage;
  
  constructor() {

  }
}
