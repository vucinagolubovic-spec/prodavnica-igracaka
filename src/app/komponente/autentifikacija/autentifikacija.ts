import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../servisi/auth';

@Component({
  selector: 'app-autentifikacija',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './autentifikacija.html',
  styleUrl: './autentifikacija.css'
})
export class Autentifikacija {
  
  jePrijava: boolean = true; 
  prijavaPodaci = { email: '', lozinka: '' };
  registracijaPodaci = { ime: '', prezime: '', email: '', lozinka: '', datumRodenja: '', omiljeniTipovi: [] as string[], usloviPrihvaceni: false };
  danasnjiDatum: string = new Date().toISOString().split('T')[0];
  tipoviIgracaka: string[] = ['slagalica', 'slikovnica', 'figura', 'karakter', 'ostalo'];

  constructor(private router: Router, private authService: AuthService) {}

  promeniMod(): void {
    this.jePrijava = !this.jePrijava;
  }

  promeniOmiljeniTip(tip: string): void {
    if (this.registracijaPodaci.omiljeniTipovi.includes(tip)) {
      this.registracijaPodaci.omiljeniTipovi = this.registracijaPodaci.omiljeniTipovi.filter(t => t !== tip);
    } else {
      this.registracijaPodaci.omiljeniTipovi.push(tip);
    }
  }

  posaljiFormu(): void {
    if (this.jePrijava) {
      // LOGIKA ZA PRIJAVU
      if (this.prijavaPodaci.email && this.prijavaPodaci.lozinka) {
        const uspesno = this.authService.prijaviSe(this.prijavaPodaci.email, this.prijavaPodaci.lozinka);
        if(uspesno) {
          alert('Uspešno ste se prijavili!');
          this.router.navigate(['/']); // Vodi na katalog
        } else {
          alert('Pogrešan email ili lozinka. Probajte: petar@gmail.com / 123');
        }
      } else {
        alert('Molimo unesite email i lozinku.');
      }
    } else {
      // LOGIKA ZA REGISTRACIJU
      if (this.registracijaPodaci.usloviPrihvaceni && this.registracijaPodaci.email) {
        if (this.registracijaPodaci.datumRodenja && this.registracijaPodaci.datumRodenja > this.danasnjiDatum) {
          alert('Datum rođenja ne može biti u budućnosti.');
          return;
        }
        this.authService.registrujSe(this.registracijaPodaci); 
          if (!this.authService.registrujSe(this.registracijaPodaci))
          return; 
        alert('Uspešna registracija! Sada se prijavite sa vašim podacima.');
        // Ne vodi na katalog, već prebacuje na formu za prijavu!
        this.jePrijava = true; 
        this.prijavaPodaci.email = this.registracijaPodaci.email; // Automatski mu upisujemo email da ne kuca opet
        this.prijavaPodaci.lozinka = ''; 
      } else {
        alert('Morate popuniti podatke i prihvatiti uslove korišćenja.');
      }
    }
  }
}   
