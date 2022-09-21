import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../../feature/login/login.component';
import { RecuperarSenhaComponent } from '../../../feature/recuperar-senha/recuperar-senha.component';
import { ContainerAuthComponent } from './container-auth.component';



const routes: Routes = [
  {
    path: '',
    component: ContainerAuthComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'recuperar-senha',
        component: RecuperarSenhaComponent
      }
      // {
      //   path: '',
      //   loadChildren: () => import('../../../feature/login/login.module').then(m => m.LoginModule),
      // }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerAuthRoutingModule { }
