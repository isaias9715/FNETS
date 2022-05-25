import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CitasComponent } from './citas/citas.component';
const routes: Routes = [{path:"agenda",component:CitasComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
