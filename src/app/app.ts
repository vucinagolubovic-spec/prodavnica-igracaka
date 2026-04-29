import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigacija } from './komponente/navigacija/navigacija';

@Component({
  selector: 'app-root',
  
  imports: [RouterOutlet, Navigacija],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('prodavnica-igracaka');
}