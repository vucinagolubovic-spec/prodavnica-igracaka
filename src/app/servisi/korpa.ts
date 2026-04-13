import { Injectable } from '@angular/core';
import { Igracka, Rezervacija } from '../modeli/tipovi';

@Injectable({
  providedIn: 'root'
})
export class KorpaService {
  
  // Ovde se čuvaju sve igračke koje korisnik klikne
  private rezervacije: Rezervacija[] = [];
  private sledeciId = 1; // Ovo koristimo da svaka rezervacija u korpi ima svoj jedinstveni broj

  constructor() { }

  // 1. Vraća sve što je u korpi
  getKorpa(): Rezervacija[] {
    return this.rezervacije;
  }

  // 2. Dodaje novu igračku u korpu sa statusom 'rezervisano'
  dodajRezervaciju(igracka: Igracka): void {
    const novaRezervacija: Rezervacija = {
      id: this.sledeciId++, // Dajemo joj ID i povećavamo brojač za sledeću
      igracka: igracka,
      status: 'rezervisano', // Po zadatku, inicijalni status je rezervisano
      ocenjeno: false
    };
    this.rezervacije.push(novaRezervacija);
  }

  // 3. Brisanje iz korpe (dozvoljeno samo za status 'pristiglo' po zadatku, ali to ćemo kontrolisati na samoj stranici korpe)
  obrisiRezervaciju(idRezervacije: number): void {
    this.rezervacije = this.rezervacije.filter(rez => rez.id !== idRezervacije);
  }

  // 4. Promena statusa (npr. iz 'rezervisano' u 'otkazano' ili 'pristiglo')
  promeniStatus(idRezervacije: number, noviStatus: 'rezervisano' | 'pristiglo' | 'otkazano'): void {
    const rez = this.rezervacije.find(r => r.id === idRezervacije);
    if (rez) {
      rez.status = noviStatus;
    }
  }

  // 5. Automatsko računanje ukupne cene (sabiramo samo one koje nisu otkazane)
  izracunajUkupno(): number {
    return this.rezervacije
      .filter(rez => rez.status !== 'otkazano')
      .reduce((suma, trenutna) => suma + trenutna.igracka.cena, 0);
  }
}