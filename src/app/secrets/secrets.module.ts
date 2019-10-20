import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowComponent } from './show/show.component';
import {SecretsRoutingModule} from './secrets-routing.module';

@NgModule({
  declarations: [ShowComponent],
  imports: [
    CommonModule,
    SecretsRoutingModule
  ]
})
export class SecretsModule { }
