import { TarjetaJuegoComponent } from './componentes/tarjeta-juego/tarjeta-juego.component';
import { Routes } from '@angular/router';
import { JuegosOfertaComponent } from './componentes/juegos-oferta/juegos-oferta.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { JuegoDetalleComponent } from './componentes/juego-detalle/juego-detalle.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';

export const routes: Routes = [
  {path: "",redirectTo: "Ofertas", pathMatch:"full"},
  {path:"Ofertas",component:JuegosOfertaComponent},
  {path:"Todos",component:JuegosComponent},
  {path:"juegoDetalle/:id",component:JuegoDetalleComponent},
  {path:"Fotos",component:CarruselComponent},
  {path:"tarjetaJuego/:id",component:TarjetaJuegoComponent}
];
