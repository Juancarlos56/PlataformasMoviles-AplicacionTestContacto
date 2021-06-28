import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from "@angular/router"
import { ContactosService } from 'src/app/service/contactos.service';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {

  contactos: any;

  constructor(private router: Router, private contactoService: ContactosService) { }
  
  ngOnInit() {
    this.contactos = this.contactoService.getContactos();
  }

  public personas = [
    { icon: 'person-circle', nombre: 'Juan', edad: 22, fecha: '20/07/1998' },
    { icon: 'person-circle', nombre: 'Katy', edad: 21, fecha: '21/10/1952' },
    { icon: 'person-circle', nombre: 'Christian', edad: 12, fecha: '08/10/1978' },
    { icon: 'person-circle', nombre: 'Ana', edad: 40, fecha: '15/09/1978' },
    { icon: 'person-circle', nombre: 'Jose', edad: 40, fecha: '01/01/1978' },
  ];
  async editar(nombre,edad,fecha){

    let params: NavigationExtras ={
      queryParams: {
        nombre: nombre,
        edad: edad,
        fecha:fecha
      }
    }
    this.router.navigate(["contactos/editar"], params)
  }

  crear(){
    this.router.navigate(["contactos/crear"])
  }

  editarContacto(contacto: any){
    //()
    let params: NavigationExtras ={
      queryParams: {
        contacto: contacto
      }
    }
    this.router.navigate(["contactos/crear"], params)
  }

}
