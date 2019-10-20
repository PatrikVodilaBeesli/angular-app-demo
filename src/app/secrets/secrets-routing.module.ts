import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SecretsModule} from './secrets.module';

const routes: Routes = [
  {
    path: '',
    component: SecretsModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecretsRoutingModule { }
