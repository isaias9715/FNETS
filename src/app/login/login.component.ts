import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../servicio.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: ServicioService,private router:Router) { }
  modo = 1;
  usuario = {
    nombre: '',
    password: ''

  }
  exito: any;
  ngOnInit(): void {
    if(localStorage.getItem('id')!=null && localStorage.getItem('id')!=''){
      this.router.navigate(['/agenda'])
    }
  }
ingresar_usuario(){
  this.service.insert_usuario(this.usuario).subscribe(res => {
    console.log(res)
    this.exito = res;
    if (this.exito.success == true) {
      sessionStorage.setItem('id', this.exito.data[0][0].id)
      this.router.navigate(['/agenda'])
    } else {
      alert('error')
    }
   })
}
  agregar_usuario() {
    if (this.usuario.nombre == '' || this.usuario.password == '') {
      alert('rellena todo')
      
    } else {
      this.service.insert_usuario(this.usuario).subscribe(res => {
        console.log(res)
        this.exito = res;
        if (this.exito.success == true) {
          sessionStorage.setItem('id', this.exito.data[0][0].id)
          this.router.navigate(['/agenda'])
        } else {
          alert('error')
        }
      })
    }
  }
}
