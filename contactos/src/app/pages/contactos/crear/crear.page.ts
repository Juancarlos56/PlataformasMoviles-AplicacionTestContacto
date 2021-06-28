import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from 'src/app/domain/contacto';
import { ContactosService } from 'src/app/service/contactos.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  //nombre: string;
  //edad: any;
  contacto: Contacto = new Contacto();

  //contactos: any;

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private contactoService: ContactosService){
    
      route.queryParams.subscribe(params =>{
      console.log(params)
      //Para parametros constantes
      //this.contacto = params.contacto;
      
      //Para parametros de tipo objeto
      this.contacto = new Contacto();
      
      if(this.router.getCurrentNavigation().extras.queryParams){
        this.contacto = this.router.getCurrentNavigation().extras.queryParams.contacto;
        console.log(this.contacto);
      }
    })

  }

  

  ngOnInit() {
    //this.contactos = this.contactoService.getContactos();
  }

  guardar(){
    console.log(this.contacto);
    this.contactoService.save(this.contacto);
    this.router.navigate(['contactos/listado'])
  }
}
