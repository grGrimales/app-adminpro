import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  
  ngOnInit(): void {
    this.btnClass = `btn ${ this.btnClass }`;
  }

//El input lo utilizamos para indicar 
//Que estamos esperando una propiedad con ese nombre del componente padre 
  @Input('valor') progreso: number = 40;
  @Input() btnClass: string =' btn-primary';
  //El output esta esperando un evento
  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();

  cambiarValor( valor: number ){
      if (this.progreso >= 100 && valor >= 0){
        this.valorSalida.emit(100);
        return this.progreso = 100;
      }
      if (this.progreso <= 0 && valor < 0){
        this.valorSalida.emit(0);
        return this.progreso = 0;
      }

    this.progreso = this.progreso + valor
    this.valorSalida.emit(this.progreso);
  }

  onChange( nuevoValor:number ){

    if( nuevoValor >= 100){
      this.progreso = 100;
    }else if ( nuevoValor <=0 ){
      this.progreso = 0;
    } else {
      this.progreso = nuevoValor;
    }

   this.valorSalida.emit( this.progreso );
  }
  constructor() { }


}
