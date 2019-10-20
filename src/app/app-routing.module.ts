import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {WelcomeComponent} from './welcome/welcome.component';

const routes: Routes = [
  {path: '',
  pathMatch: 'full',
  component: WelcomeComponent},
  {path: 'secrets',
  loadChildren: './secrets/secrets.module#SecretsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
