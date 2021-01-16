import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string ='Capitán América';

  arreglo = [1,2,3,4,5,6,7,8,9,10];

  activar :boolean = true;
  
  PI:number =Math.PI;

  heroe={
    nombre:'Logan',
    clave:'Wolverine',
    edad:500,
    direccion:{
      calle: 'Primera',
      casa: 20
    }
  }

  valorPromesa = new Promise<string>((resolve)=>{
  
    setTimeout(()=>{
    resolve('llega el dato');
  },4500);
  });
}
