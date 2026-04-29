import { Routes } from '@angular/router';
import { Profil } from './komponente/profil/profil';
import { Autentifikacija } from './komponente/autentifikacija/autentifikacija';
import { Katalog } from './komponente/katalog/katalog';
import { Korpa } from './komponente/korpa/korpa';                                                        

export const routes: Routes = [
  { path: '', component: Katalog }, 
  { path: 'korpa', component: Korpa }, 
  { path: 'profil', component: Profil }, 
  { path: 'prijava', component: Autentifikacija }, 
  { path: '**', redirectTo: '' } 
];