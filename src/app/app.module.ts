import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BrMaskerModule } from 'brmasker-ionic-3';

import { ContatosPage } from '../pages/contatos/contatos';
import { MensagensPage } from '../pages/mensagens/mensagens';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AddContatoPage } from '../pages/contatos/add-contato/add-contato';


@NgModule({
  declarations: [
    MyApp,
    ContatosPage,
    TabsPage,
    MensagensPage,
    AddContatoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrMaskerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContatosPage,
    TabsPage,
    MensagensPage,
    AddContatoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
