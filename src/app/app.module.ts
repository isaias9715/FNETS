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
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSliderModule } from '@angular/material/slider';
<<<<<<< HEAD
import { ChunkPipe } from './pipe/chunk.pipe';

=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> 9b8f557ad21c86ae557a4f64c82f63e2bceca9e6

@NgModule({
  declarations: [
    AppComponent,
    CitasComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    ChunkPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    FullCalendarModule,
    MatSliderModule,
  
    NgbModule,
  
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
