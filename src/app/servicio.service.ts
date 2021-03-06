import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { }
  url='http://192.168.2.11:20204/'
  get_citas(){
    return 'kkkkk'
  }
  insert_usuario(data:any){
    return this.http.post(`${this.url}usuarios/cliente`,data)
  }
  insert_admin(data:any){
    return this.http.post(`${this.url}usuarios/admin`,data)
  }
  login_usuario(data:any){
    return this.http.post(`${this.url}usuarios/`,data)
  }
  get_especialidades(){
    return this.http.get(`${this.url}usuarios/especialidades`)
  }
}
