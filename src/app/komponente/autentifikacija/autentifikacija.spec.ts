import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Autentifikacija } from './autentifikacija';

describe('Autentifikacija', () => {
  let component: Autentifikacija;
  let fixture: ComponentFixture<Autentifikacija>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Autentifikacija],
    }).compileComponents();

    fixture = TestBed.createComponent(Autentifikacija);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
