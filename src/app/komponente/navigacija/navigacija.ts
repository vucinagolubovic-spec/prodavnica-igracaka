import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Potrebno za *ngIf
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { AuthService } from '../../servisi/auth';

@Component({
  selector: 'app-navigacija',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive], 
  templateUrl: './navigacija.html',
  styleUrl: './navigacija.css'
})
export class Navigacija {
  
  constructor(public authService: AuthService, private router: Router) {}

  izlogujSe() {
    this.authService.odjaviSe();
    this.router.navigate(['/prijava']); // Prebacimo ga na stranu za prijavu
  }
}