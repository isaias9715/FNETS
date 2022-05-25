import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CitasComponent } from './citas/citas.component';
import { CommonModule } from '@angular/common';
import {FullCalendarModule} from 'primeng/fullcalendar';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CitasComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
