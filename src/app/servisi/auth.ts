import { Injectable } from '@angular/core';
import { Korisnik } from '../modeli/tipovi';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private trenutniKorisnik: Korisnik | null = null;
  
  private registrovaniKorisnici: Korisnik[] = [
    { id: 1, ime: 'Petar', prezime: 'Petrović', email: 'petar@gmail.com', lozinka: '123', datumRodenja: '', telefon: '060123', adresa: 'Glavna 1', omiljeniTipovi: [] }
  ];

  constructor() {
    // ČIM SE SERVIS POKRENE (npr. nakon refresha), PROVERI LOCALSTORAGE
    const sacuvanKorisnik = localStorage.getItem('ulogovaniKorisnik');
    if (sacuvanKorisnik) {
      this.trenutniKorisnik = JSON.parse(sacuvanKorisnik);
    }
  }

  getTrenutniKorisnik(): Korisnik | null {
    return this.trenutniKorisnik;
  }

  isUlogovan(): boolean {
    return this.trenutniKorisnik !== null;
  }

  prijaviSe(email: string, lozinka: string): boolean {
    const nadjen = this.registrovaniKorisnici.find(k => k.email === email && k.lozinka === lozinka);
    if (nadjen) {
      this.trenutniKorisnik = { ...nadjen };
      // SAČUVAJ U MEMORIJU PRETRAŽIVAČA
      localStorage.setItem('ulogovaniKorisnik', JSON.stringify(this.trenutniKorisnik));
      return true;
    }
    return false;
  }

  registrujSe(noviKorisnik: any): boolean {
    if (this.registrovaniKorisnici.find(k => k.email === noviKorisnik.email)) {
      alert('Email već postoji! Molimo koristite drugi email.');
      return false;
    }
    const noviK: Korisnik = {
      id: Date.now(),
      ime: noviKorisnik.ime,
      prezime: noviKorisnik.prezime,
      email: noviKorisnik.email,
      lozinka: noviKorisnik.lozinka,
      datumRodenja: noviKorisnik.datumRodenja,
      telefon: '',
      adresa: '',
      omiljeniTipovi: noviKorisnik.omiljeniTipovi
    };
    this.registrovaniKorisnici.push(noviK); return true;
  }

  odjaviSe(): void {
    this.trenutniKorisnik = null;
    // OBRIŠI IZ MEMORIJE PRETRAŽIVAČA
    localStorage.removeItem('ulogovaniKorisnik');
  }

  azurirajKorisnika(noviPodaci: Korisnik): void {
    this.trenutniKorisnik = { ...noviPodaci };
    localStorage.setItem('ulogovaniKorisnik', JSON.stringify(this.trenutniKorisnik));
    
    const index = this.registrovaniKorisnici.findIndex(k => k.id === noviPodaci.id);
    if(index !== -1) {
      this.registrovaniKorisnici[index] = { ...noviPodaci };
    }
  }
}
