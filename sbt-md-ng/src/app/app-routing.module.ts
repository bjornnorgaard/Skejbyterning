import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppAboutComponent } from './about/app-about/app-about.component';
import { AppGameComponent } from './game/app-game/app-game.component';
import { AppWelcomeComponent } from './welcome/app-welcome/app-welcome.component';

const routes: Routes = [
  {path: '', component: AppWelcomeComponent},
  {path: 'welcome', component: AppWelcomeComponent},
  {path: 'game', component: AppGameComponent},
  {path: 'about', component: AppAboutComponent},
  {path: '**', component: AppWelcomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
