import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { CitasComponent } from './citas/citas.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BatmanGuard } from './batman.guard';


const routes: Routes = [
  { path: "agenda", component: CitasComponent, canActivate:[BatmanGuard]},
  { path: "nav", component: NavComponent },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "*", component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})

export class AppRoutingModule {}

