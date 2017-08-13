import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about/about.component';
import { AppGameComponent } from './game/app-game/app-game.component';
import { RulesComponent } from './rules/rules/rules.component';
import { AppWelcomeComponent } from './welcome/app-welcome/app-welcome.component';

const routes: Routes = [
  {path: '', component: AppWelcomeComponent},
  {path: 'welcome', component: AppWelcomeComponent},
  {path: 'game', component: AppGameComponent},
  {path: 'rules', component: RulesComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: AppWelcomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
