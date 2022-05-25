import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {

  constructor(private service:ServicioService) { }

  ngOnInit(): void {
  }
  citas={
    nombre:'',
    descripcion:'',
    fecha:'',
  }
  cita:any;
   get_citas(){
    this.service.get_citas()
    
  }
  
  options={
    plugins:[dayGridPlugin,timeGridPlugin,interactionPlugin],
    defaultDate: new Date(),
    header:{
      left:'prev,next',
      center:'title',
      right:'dayGridMonth,timeGridWeek,timeGridDay'
    },
    editable:false
    
  }
 events= []

}
