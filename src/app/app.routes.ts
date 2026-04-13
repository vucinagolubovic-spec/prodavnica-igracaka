import { Routes } from '@angular/router';
import { Profil } from './komponente/profil/profil';
import { Autentifikacija } from './komponente/autentifikacija/autentifikacija';
import { Katalog } from './komponente/katalog/katalog';
import { Korpa } from './komponente/korpa/korpa';                                                        

export const routes: Routes = [
  { path: '', component: Katalog }, // Početna strana (Katalog igračaka)
  { path: 'korpa', component: Korpa }, // Stranica za korpu
  { path: 'profil', component: Profil }, // Stranica za profil
  { path: 'prijava', component: Autentifikacija }, // Stranica za login/registraciju
  { path: '**', redirectTo: '' } // Ako neko unese pogrešan link, vraća ga na početnu
];