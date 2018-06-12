import { Component } from '@angular/core';

@Component({
  selector: 'app-listacomponente',
  templateUrl: './listacomponente.component.html',
  styleUrls: ['./listacomponente.component.css']
})
export class ListacomponenteComponent {
  lista = [];
  txtNome = "";

  add(){
    this.lista.push(this.txtNome);
  }
}
