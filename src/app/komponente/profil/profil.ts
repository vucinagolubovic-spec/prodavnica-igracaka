import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router'; 
import { AuthService } from '../../servisi/auth';
import { Korisnik } from '../../modeli/tipovi';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './profil.html',
  styleUrl: './profil.css'
})
export class Profil implements OnInit {
  
  korisnik: Korisnik | null = null;
  editMod: boolean = false; 
  korisnikEdit!: Korisnik;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.korisnik = this.authService.getTrenutniKorisnik();
  }

  ukljuciEdit(): void {
    if(this.korisnik) {
      this.editMod = true;
      this.korisnikEdit = { ...this.korisnik };
    }
  }

  sacuvaj(): void {
    this.authService.azurirajKorisnika(this.korisnikEdit);
    this.korisnik = this.authService.getTrenutniKorisnik();
    this.editMod = false;
    alert('Podaci su uspešno sačuvani!');
  }

  odustani(): void {
    this.editMod = false;
  }
}