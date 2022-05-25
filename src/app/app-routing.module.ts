import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatmanGuard } from './batman.guard';

import { CitasComponent } from './citas/citas.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [{path:"agenda",component:CitasComponent,canActivate:[BatmanGuard]},
{path:"**",component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
