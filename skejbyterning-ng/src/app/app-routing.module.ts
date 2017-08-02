import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RulesComponent } from './rules/rules.component';
import { GameComponent } from './game/game.component';
import { AboutComponent } from './about/about.component';
import { DonateComponent } from './donate/donate.component';

const routes: Routes = [
  {path: '', component: GameComponent},
  {path: 'rules', component: RulesComponent},
  {path: 'game', component: GameComponent},
  {path: 'about', component: AboutComponent},
  {path: 'donate', component: DonateComponent},
  {path: '**', component: GameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
