import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { ListaPlacasI } from 'src/app/modelos/listaplacas.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = "http://52.188.161.154:8080/api/placas"
  
  constructor(private http:HttpClient) { }
  
  getAllPlacas():Observable<ListaPlacasI[]>{
    let direccion = this.url;
    return this.http.get<ListaPlacasI[]>(direccion);
  }



}
