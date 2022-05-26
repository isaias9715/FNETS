import { Component, LOCALE_ID, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ServicioService } from '../servicio.service';
import * as moment from 'moment';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common'; 
registerLocaleData(localeEs, 'es');

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  styleUrls: ['./citas.component.css']
})


export class CitasComponent implements OnInit {

  mostrar=0;

   today = new Date();
  dd = String(this.today.getDate()).padStart(2, '0'); 
  mm = String(this.today.getMonth() + 1).padStart(2, '  0'); //Enero es 0!  
  yyyy = this.today.getFullYear();     

  // Array de Semanas  
  week: any = ["Lunes ", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado", "Domingo",];

  // Array de Mes
  monthSelect: any[] = [];

  //Array de Fecha
  dateSelect: any;
  
  constructor(private service: ServicioService) { }
  
  // FUNCIÓN QUE CREA OBJETO TIPO DATE 
  getDaysFromDate(month: any, year: any) {
    

    const startDate = moment(`${year}/${month}/01`,["MM-DD-YYYY", "YYYY-MM-DD"])
    
    
    const endDate = startDate.clone().endOf('month') //obj cuando finaliza el mes
    
    
    this.dateSelect = startDate;
    
    

    // trae en días 'days' la cantidad de dias que existen de diferencia entre fecha de inicio y final
    const diffDays = endDate.diff(startDate, 'days', true) 
    const numberDays = Math.round(diffDays); //redondea el numero

    // 
    const arrayDays = Object.keys([...Array(numberDays)]).map((a: any) => {
      a = parseInt(a) + 1;
      // console.log("prueba: ",a);

      // Se crea objeto de fecha
      const dayObject = moment(`${year}-${month}-${a}`,["MM-DD-YYYY", "YYYY-MM-DD"]);

      return {
        name: dayObject.format("dddd"), //objeto "nombre" del dia
        value: a, //numero del día
        indexWeek: dayObject.isoWeekday() //indice que representa el dia en la semana
      };
    });

    this.monthSelect = arrayDays; //Se guarda en esta variable
    // console.log(this.monthSelect)
  }


  changeMonth(flag: number) {
    if (flag < 0) {
      const prevDate = this.dateSelect.clone().subtract(1, "month");
      this.getDaysFromDate(prevDate.format("MM"), prevDate.format("YYYY"));
    } else {
      const nextDate = this.dateSelect.clone().add(1, "month");
      this.getDaysFromDate(nextDate.format("MM"), nextDate.format("YYYY"));
    }
  }

  clickDay(day: { value: any; }) {
    const monthYear = this.dateSelect.format('YYYY-MM')
    const parse = `${monthYear}-${day.value}`
    const objectDate = moment(parse, ["MM-DD-YYYY", "YYYY-MM-DD"])
    console.log(parse);
    
    // console.log(objectDate);
    // this.dateValue = objectDate;


  }
  
  ngOnInit(): void {
    // console.log("Today: ",this.dd);
    // console.log("Today Mes: ",this.mm);
    // console.log("Today Año: ",this.yyyy);
    this.getDaysFromDate(this.mm,this.yyyy);
  }



}
