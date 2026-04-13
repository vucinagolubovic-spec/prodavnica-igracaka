export interface Recenzija {
  korisnik: string;
  ocena: number;
  komentar: string;
}

export interface Igracka {
  id: number;
  naziv: string;
  opis: string;
  tip: 'slagalica' | 'slikovnica' | 'figura' | 'karakter' | 'ostalo';
  uzrast: string;
  ciljnaGrupa: 'devojčica' | 'dečak' | 'svi';
  datumProizvodnje: Date;
  cena: number;
  recenzije: Recenzija[];
}

export interface Rezervacija {
  id: number; 
  igracka: Igracka;
  status: 'rezervisano' | 'pristiglo' | 'otkazano';
  ocenjeno: boolean; 
}

export interface Korisnik {
  id: number;
  ime: string;
  prezime: string;
  email: string;
  lozinka: string; 
  datumRodenja: string;
  telefon: string;
  adresa: string;
  omiljeniTipovi: string[];
}

export interface Igracka {
  // ... stari podaci ...
  slikaUrl: string; // Dodaj ovo polje
}
