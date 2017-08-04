import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about/about.component';
import { GameComponent } from './game/game/game.component';
import { RulesComponent } from './rules/rules/rules.component';

const routes: Routes = [
  {path: '', component: GameComponent},
  {path: 'game', component: GameComponent},
  {path: 'rules', component: RulesComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: GameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
