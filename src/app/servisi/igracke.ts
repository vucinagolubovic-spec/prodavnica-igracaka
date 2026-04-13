import { Injectable } from '@angular/core';
import { Igracka } from '../modeli/tipovi';

@Injectable({
  providedIn: 'root'
})
export class IgrackeService {

  private igracke: Igracka[] = [
    { 
      id: 1, 
      naziv: 'Lego Dvorac', 
      opis: 'Veliki dvorac sa 500 delova.', 
      tip: 'slagalica', 
      uzrast: '7+', 
      ciljnaGrupa: 'svi', 
      datumProizvodnje: new Date('2023-01-15'), 
      cena: 5500, 
      recenzije: [],
      slikaUrl: '/assets/legodvorac.jpg' 
    },
    { 
      id: 2, 
      naziv: 'Barbika Princeza', 
      opis: 'Lutka sa haljinom i krunom.', 
      tip: 'figura', 
      uzrast: '4+', 
      ciljnaGrupa: 'devojčica', 
      datumProizvodnje: new Date('2023-05-10'), 
      cena: 2200, 
      recenzije: [],
      slikaUrl: '/assets/barbie-princeza.png'
    },
    { 
      id: 3, 
      naziv: 'Spajdermen figura', 
      opis: 'Figura sa pokretnim zglobovima.', 
      tip: 'karakter', 
      uzrast: '5+', 
      ciljnaGrupa: 'dečak', 
      datumProizvodnje: new Date('2023-08-20'), 
      cena: 1800, 
      recenzije: [],
      slikaUrl: '/assets/spajdermen-figura.jpg'
    },
    { 
      id: 4, 
      naziv: 'Puzle Životinje', 
      opis: 'Drvene puzle za najmlađe.', 
      tip: 'slagalica', 
      uzrast: '2+', 
      ciljnaGrupa: 'svi', 
      datumProizvodnje: new Date('2024-01-05'), 
      cena: 900, 
      recenzije: [],
      slikaUrl: '/assets/puzle-zivotinja.jpg'
    },
    { 
      id: 5, 
      naziv: 'Zvučna slikovnica', 
      opis: 'Knjiga koja ispušta zvuke životinja.', 
      tip: 'slikovnica', 
      uzrast: '1+', 
      ciljnaGrupa: 'svi', 
      datumProizvodnje: new Date('2023-11-11'), 
      cena: 1500, 
      recenzije: [],
      slikaUrl: '/assets/zvucna-slikovnica.jpg'
    },
    { 
      id: 6, 
      naziv: 'Set za čajanku', 
      opis: 'Plastični set šoljica i čajnik.', 
      tip: 'ostalo', 
      uzrast: '3+', 
      ciljnaGrupa: 'devojčica', 
      datumProizvodnje: new Date('2022-12-01'), 
      cena: 1200, 
      recenzije: [],
      slikaUrl: '/assets/set-za-cajanku.jpeg'
    },
    { 
      id: 7, 
      naziv: 'Metalni autići', 
      opis: 'Set od 5 trkačkih automobila.', 
      tip: 'ostalo', 
      uzrast: '4+', 
      ciljnaGrupa: 'dečak', 
      datumProizvodnje: new Date('2023-09-30'), 
      cena: 2000, 
      recenzije: [],
      slikaUrl: '/assets/metalni-autici.jpg'
    },
    { 
      id: 8, 
      naziv: 'Plišani Meda', 
      opis: 'Veliki mekani plišani medved.', 
      tip: 'karakter', 
      uzrast: '0+', 
      ciljnaGrupa: 'svi', 
      datumProizvodnje: new Date('2024-02-14'), 
      cena: 3500, 
      recenzije: [],
      slikaUrl: '/assets/plisani-meda.jpg'
    },
    { 
      id: 9, 
      naziv: 'Edukativni Tablet', 
      opis: 'Učenje slova i brojeva kroz igru.', 
      tip: 'ostalo', 
      uzrast: '5+', 
      ciljnaGrupa: 'svi', 
      datumProizvodnje: new Date('2023-04-22'), 
      cena: 4100, 
      recenzije: [],
      slikaUrl: '/assets/edukativni-tablet.jpg'
    },
    { 
      id: 10, 
      naziv: 'Dečiji alat', 
      opis: 'Plastični čekić i bušilica.', 
      tip: 'ostalo', 
      uzrast: '3+', 
      ciljnaGrupa: 'dečak', 
      datumProizvodnje: new Date('2023-07-07'), 
      cena: 2800, 
      recenzije: [],
      slikaUrl: '/assets/deciji-alat.jpg'
    }
  ];

  getSveIgracke(): Igracka[] {
    return this.igracke;
  }

  pretraziIgracke(kriterijumi: any): Igracka[] {
    return this.igracke.filter(igracka => {
      let odgovara = true;
      if (kriterijumi.naziv && !igracka.naziv.toLowerCase().includes(kriterijumi.naziv.toLowerCase())) odgovara = false;
      if (kriterijumi.tip && igracka.tip !== kriterijumi.tip) odgovara = false;
      if (kriterijumi.ciljnaGrupa && igracka.ciljnaGrupa !== kriterijumi.ciljnaGrupa) odgovara = false;
      if (kriterijumi.cena && igracka.cena > kriterijumi.cena) odgovara = false;
      return odgovara;
    });
  }
}