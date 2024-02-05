import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { ServicioJuegoService } from '../../servicios/servicio-juego.service';
import { Juego } from '../../interfaces/juego';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-tarjeta-juego',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,NgIf],
  templateUrl: './tarjeta-juego.component.html',
  styleUrl: './tarjeta-juego.component.css'
})
export class TarjetaJuegoComponent {
  juego?:Juego;
  constructor(private activateRouter: ActivatedRoute,
      private servicioJuegos:ServicioJuegoService){
        const id:String|null = this.activateRouter.snapshot.paramMap.get('id');
        if(id){
        this.servicioJuegos.getJuego(id).then(juegoLeido =>{
        this.juego = juegoLeido;
        });
        }

  }
}
