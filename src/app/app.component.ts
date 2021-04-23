import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'proyecto001';
  

  art={
    codigo:null,
    descripcion:null,
    precio:null
  }

  articulos = [{codigo:1, descripcion:'SSD 1TB', precio:1999},
               {codigo:2, descripcion:'HDD 1TB', precio:600},
               {codigo:3, descripcion:'Memoria Ram 4GB', precio:500},
               {codigo:4, descripcion:'Gabinete', precio:900},
               {codigo:5, descripcion:'Tarjeta Madre', precio:1500},
              ];

  hayRegistros() {
    return this.articulos.length>0;              
  }

  borrar(art) {
    for(let x=0;x<this.articulos.length;x++)
      if (this.articulos[x].codigo==art.codigo)
      {
        this.articulos.splice(x,1);
        return;
      }
  }

  agregar() {
    for(let x=0;x<this.articulos.length;x++)
    if (this.articulos[x].codigo==this.art.codigo)
    {
      alert('Ya existe un articulo con dicho codigo');
      return;
    }        
    this.articulos.push({codigo:this.art.codigo,
                         descripcion:this.art.descripcion,
                         precio:this.art.precio });
    this.art.codigo=null;
    this.art.descripcion=null;
    this.art.precio=null;    
  }

  seleccionar(art) {
    this.art.codigo=art.codigo;
    this.art.descripcion=art.descripcion;
    this.art.precio=art.precio;
  }

  modificar() {
    for(let x=0;x<this.articulos.length;x++)
      if (this.articulos[x].codigo==this.art.codigo)
      {
        this.articulos[x].descripcion=this.art.descripcion;
        this.articulos[x].precio=this.art.precio;
        return;
      }        
    alert('No existe el código de articulo ingresado');
  }
}
