import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Potrebno da bi radio *ngFor u HTML-u
import { FormsModule } from '@angular/forms';
import { Igracka } from '../../modeli/tipovi';
import { IgrackeService } from '../../servisi/igracke'; 
import { KorpaService } from '../../servisi/korpa';
import { AuthService } from '../../servisi/auth';

@Component({
  selector: 'app-katalog',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './katalog.html', 
  styleUrls: ['./katalog.css']  
})
export class Katalog implements OnInit {
  
  igracke: Igracka[] = []; // Ovde ćemo čuvati igračke

  // Objekat u kom čuvamo sve što korisnik unese u polja
  kriterijumi: any = {
    naziv: '',
    opis: '',
    tip: '',
    ciljnaGrupa: '',
    cena: null
  };
  // Uključujemo servis u našu komponentu
  constructor(private igrackeService: IgrackeService, private korpaService: KorpaService, private authService: AuthService) {}

  // ngOnInit se pokreće automatski čim se stranica učita
  ngOnInit(): void {
    this.igracke = this.sortirajPoOmiljenimTipovima(this.igrackeService.getSveIgracke());
  }
  // Funkcija koja se poziva na klik dugmeta "Pretraži"
  pretrazi(): void {
    this.igracke = this.sortirajPoOmiljenimTipovima(this.igrackeService.pretraziIgracke(this.kriterijumi));
  }

  // Funkcija za resetovanje pretrage
  ponisti(): void {
    this.kriterijumi = { naziv: '', opis: '', tip: '', ciljnaGrupa: '', cena: null };
    this.igracke = this.sortirajPoOmiljenimTipovima(this.igrackeService.getSveIgracke());
  }

  dodajUKorpu(igracka: Igracka) {
    this.korpaService.dodajRezervaciju(igracka);
    alert(`Igračka "${igracka.naziv}" je rezervisana i dodata u korpu!`); 
  }

  sortirajPoOmiljenimTipovima(igracke: Igracka[]): Igracka[] {
    const korisnik = this.authService.getTrenutniKorisnik();
    if (!korisnik || korisnik.omiljeniTipovi.length === 0) {
      return igracke;
    }

    return [...igracke].sort((a, b) => {
      const aOmiljena = korisnik.omiljeniTipovi.includes(a.tip);
      const bOmiljena = korisnik.omiljeniTipovi.includes(b.tip);

      if (aOmiljena && !bOmiljena) return -1;
      if (!aOmiljena && bOmiljena) return 1;
      return 0;
    });
  }
}
