import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about/about.component';
import { ContactComponent } from './contact/contact/contact.component';
import { GameComponent } from './game/game/game.component';
import { RulesComponent } from './rules/rules/rules.component';
import { WelcomeComponent } from './welcome/welcome/welcome.component';

const routes: Routes = [
  {path: '', component: GameComponent},
  {path: 'welcome', component: WelcomeComponent},
  /*{path: 'game', component: GameComponent},*/
  {path: 'rules', component: RulesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: GameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
