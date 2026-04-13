import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// 1. Dodajemo import za tvoju komponentu (VS Code će ti možda tražiti da izabereš tačno ime iz padajućeg menija)
import { Navigacija } from './komponente/navigacija/navigacija';

@Component({
  selector: 'app-root',
  // 2. KLJUČNI DEO: Ubacujemo je u listu imports, odmah pored RouterOutlet
  imports: [RouterOutlet, Navigacija],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('prodavnica-igracaka');
}