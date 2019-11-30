import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

import { ContatosPage } from '../pages/contatos/contatos';
import { MensagensPage } from '../pages/mensagens/mensagens';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AddContatoPage } from '../pages/contatos/add-contato/add-contato';
import { ContatosServiceProvider } from '../providers/contatos-service/contatos-service';
import { MensagensServiceProvider } from '../providers/mensagens-service/mensagens-service';
import { AddMensagemPage } from '../pages/mensagens/add-mensagem/add-mensagem';
import { ListarMensagensPage } from '../pages/listar-mensagens/listar-mensagens';


@NgModule({
  declarations: [
    MyApp,
    ContatosPage,
    TabsPage,
    MensagensPage,
    AddContatoPage,
    AddMensagemPage,
    ListarMensagensPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrMaskerModule,
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContatosPage,
    TabsPage,
    MensagensPage,
    AddContatoPage,
    AddMensagemPage,
    ListarMensagensPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContatosServiceProvider,
    MensagensServiceProvider
    
  ]
})
export class AppModule {}
