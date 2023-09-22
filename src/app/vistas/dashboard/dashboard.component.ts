import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicio/api/api.service';
import { Router } from '@angular/router';
import { ListaPlacasI } from 'src/app/modelos/listaplacas.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private api: ApiService, private router: Router) { }

  placas: ListaPlacasI[] = [];

  ngOnInit(): void {
    this.api.getAllPlacas().subscribe(data=>{
      this.placas=(data)
    })
  }

}
