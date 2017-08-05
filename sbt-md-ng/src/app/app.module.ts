import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import 'hammerjs';
import { AboutModule } from './about/about.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './game/game.module';
import { MyMaterialModule } from './my-material/my-material.module';
import { RulesModule } from './rules/rules.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyMaterialModule,
    GameModule,
    RulesModule,
    AboutModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
