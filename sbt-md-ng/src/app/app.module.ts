import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';

import 'hammerjs';
import json from '../../very-secret-file.json';
import { AboutModule } from './about/about.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GameModule } from './game/game.module';
import { MyMaterialModule } from './my-material/my-material.module';
import { RulesModule } from './rules/rules.module';

export const firebaseConfig = {
  apiKey: json.apiKey,
  authDomain: json.authDomain,
  databaseURL: json.databaseURL,
  storageBucket: json.storageBucket,
  messagingSenderId: json.messagingSenderId,
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MyMaterialModule,
    AngularFireModule.initializeApp(firebaseConfig),
    GameModule,
    RulesModule,
    AboutModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
