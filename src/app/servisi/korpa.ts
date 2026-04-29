import { Injectable } from '@angular/core';
import { Igracka, Rezervacija } from '../modeli/tipovi';

@Injectable({
  providedIn: 'root'
})
export class KorpaService {
  
  
  private rezervacije: Rezervacija[] = [];
  private sledeciId = 1; 

  constructor() { }

  
  getKorpa(): Rezervacija[] {
    return this.rezervacije;
  }

  
  dodajRezervaciju(igracka: Igracka): void {
    const novaRezervacija: Rezervacija = {
      id: this.sledeciId++, 
      igracka: igracka,
      status: 'rezervisano', 
      ocenjeno: false
    };
    this.rezervacije.push(novaRezervacija);
  }

  
  obrisiRezervaciju(idRezervacije: number): void {
    this.rezervacije = this.rezervacije.filter(rez => rez.id !== idRezervacije);
  }


  promeniStatus(idRezervacije: number, noviStatus: 'rezervisano' | 'pristiglo' | 'otkazano'): void {
    const rez = this.rezervacije.find(r => r.id === idRezervacije);
    if (rez) {
      rez.status = noviStatus;
    }
  }

  
  izracunajUkupno(): number {
    return this.rezervacije
      .filter(rez => rez.status !== 'otkazano')
      .reduce((suma, trenutna) => suma + trenutna.igracka.cena, 0);
  }
}