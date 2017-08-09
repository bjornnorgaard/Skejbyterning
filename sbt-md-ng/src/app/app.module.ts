import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import 'hammerjs';
import { environment } from '../environments/environment';
import { AboutModule } from './about/about.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContactModule } from './contact/contact.module';
import { GameModule } from './game/game.module';
import { MyMaterialModule } from './my-material/my-material.module';
import { RulesModule } from './rules/rules.module';
import { WelcomeModule } from './welcome/welcome.module';

export const firebaseConfig = {
  apiKey: environment.apiKey,
  authDomain: environment.authDomain,
  databaseURL: environment.databaseURL,
  storageBucket: environment.storageBucket,
  messagingSenderId: environment.messagingSenderId,
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
    AngularFireDatabaseModule,
    WelcomeModule,
    GameModule,
    RulesModule,
    AboutModule,
    ContactModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
