import { ServicioJuegoService } from './../../servicios/servicio-juego.service';
import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Juego } from '../../interfaces/juego';
import {MatCardModule} from '@angular/material/card';
import { Router, RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-juegos',
  standalone: true,
  imports: [MatTableModule,MatCardModule,MatButtonModule,RouterModule],
  templateUrl: './juegos.component.html',
  styleUrl: './juegos.component.css'
})
export class JuegosComponent {
  juegos:Juego[];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];


    constructor(private servicioJuegos: ServicioJuegoService,
      private router:Router){
      this.juegos=[];
    }
    ngOnInit(){
      this.getJuegos();
    }
    getJuegos(){
      this.servicioJuegos.getJuegos().then(juegosRecibidos =>{
        this.juegos=juegosRecibidos;
      })
    }
    mostrarDetalle(juego:Juego){
      this.router.navigate(['/tarjetaJuego',juego._id]);
    }
}
