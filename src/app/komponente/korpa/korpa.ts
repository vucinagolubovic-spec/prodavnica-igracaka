import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { KorpaService } from '../../servisi/korpa';
import { Rezervacija } from '../../modeli/tipovi';

@Component({
  selector: 'app-korpa',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './korpa.html',
  styleUrl: './korpa.css'
})
export class Korpa implements OnInit { 
  
  rezervacije: Rezervacija[] = [];

  
  constructor(private korpaService: KorpaService) {}

  ngOnInit(): void {
    this.osveziKorpu();
  }

  
  osveziKorpu(): void {
    this.rezervacije = this.korpaService.getKorpa();
  }

  
  promeniStatus(id: number, noviStatus: 'rezervisano' | 'pristiglo' | 'otkazano'): void {
    this.korpaService.promeniStatus(id, noviStatus);
    this.osveziKorpu();
  }

  
  obrisi(id: number): void {
    this.korpaService.obrisiRezervaciju(id);
    this.osveziKorpu();
  }

  
  oceni(rezervacija: Rezervacija, ocena: number): void {
    alert(`Ocenili ste igračku "${rezervacija.igracka.naziv}" sa ${ocena} zvezdica!`);
    rezervacija.ocenjeno = true;
  }

 
  get ukupnaCena(): number {
    return this.korpaService.izracunajUkupno();
  }
}