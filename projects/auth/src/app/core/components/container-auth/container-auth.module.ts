import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginModule } from '../../../feature/login/login.module';

import { ContainerAuthRoutingModule } from './container-auth-routing.module';
import { ContainerAuthComponent } from './container-auth.component';

@NgModule({
  declarations: [ContainerAuthComponent,],
  imports: [
    CommonModule,
    RouterModule,
    ContainerAuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule
  ]
})
export class ContainerAuthModule { }
