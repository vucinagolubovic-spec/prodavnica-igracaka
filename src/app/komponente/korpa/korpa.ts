import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Za svaki slučaj ako nam zatrebaju forme
import { KorpaService } from '../../servisi/korpa';
import { Rezervacija } from '../../modeli/tipovi';

@Component({
  selector: 'app-korpa',
  standalone: true,
  imports: [CommonModule, FormsModule], // Uvozimo alate za rad sa HTML-om
  templateUrl: './korpa.html',
  styleUrl: './korpa.css'
})
export class Korpa implements OnInit { // Ili KorpaComponent, pazi na ime!
  
  rezervacije: Rezervacija[] = [];

  // Povezujemo nasu komponentu sa servisom korpe
  constructor(private korpaService: KorpaService) {}

  ngOnInit(): void {
    this.osveziKorpu();
  }

  // Funkcija koja uzima najsvezije podatke iz servisa
  osveziKorpu(): void {
    this.rezervacije = this.korpaService.getKorpa();
  }

  // Funkcija za promenu statusa (kada je status 'rezervisano', kupac moze da ga menja)
  promeniStatus(id: number, noviStatus: 'rezervisano' | 'pristiglo' | 'otkazano'): void {
    this.korpaService.promeniStatus(id, noviStatus);
    this.osveziKorpu();
  }

  // Funkcija za brisanje (dozvoljeno samo kada je status 'pristiglo' po zadatku)
  obrisi(id: number): void {
    this.korpaService.obrisiRezervaciju(id);
    this.osveziKorpu();
  }

  // Vrednovanje/ocenjivanje igracke (samo za status 'pristiglo')
  oceni(rezervacija: Rezervacija, ocena: number): void {
    alert(`Ocenili ste igračku "${rezervacija.igracka.naziv}" sa ${ocena} zvezdica!`);
    rezervacija.ocenjeno = true;
  }

  // Get metoda koja sluzi HTML-u da automatski ispise ukupnu cenu
  get ukupnaCena(): number {
    return this.korpaService.izracunajUkupno();
  }
}