import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Encabezado } from './encabezado/encabezado';
import { Carrusel } from './carrusel/carrusel';
import { Menu } from './menu/menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Encabezado, Carrusel, Menu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Pantalla-Angular');
}