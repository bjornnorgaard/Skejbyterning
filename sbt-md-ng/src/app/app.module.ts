import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { AboutModule } from './about/about.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './game/game.module';
import { MaterialModule } from './material/material.module';
import { RulesModule } from './rules/rules.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    GameModule,
    RulesModule,
    AboutModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
