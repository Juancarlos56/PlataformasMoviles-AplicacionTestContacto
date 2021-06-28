import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Contacto } from '../domain/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  constructor(public afs : AngularFirestore) {}
  
  save(contacto: Contacto){
    const refContactos = this.afs.collection("Contactos");
    if(contacto.uid == null){
        contacto.uid = this.afs.createId();
        contacto.activo = true;
    }
    refContactos.doc(contacto.uid).set(Object.assign({}, contacto))
  }

  getContactos():Observable<any[]> {
    return this.afs.collection("Contactos", 
                              ref => ref.where("activo", "==", true)).valueChanges();
  }

}
