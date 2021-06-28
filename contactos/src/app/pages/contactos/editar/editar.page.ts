import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {

  nombre: string
  edad: any
  fecha: string
  constructor(private route: ActivatedRoute) { 
    route.queryParams.subscribe(params => {
      console.log(params)
      this.nombre=params.nombre
      this.edad=params.edad
      this.fecha=params.fecha
    })
  }
  ngOnInit() {
  }

}
