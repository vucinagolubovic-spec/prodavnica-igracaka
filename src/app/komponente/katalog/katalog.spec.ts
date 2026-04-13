import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Katalog } from './katalog';

describe('Katalog', () => {
  let component: Katalog;
  let fixture: ComponentFixture<Katalog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Katalog],
    }).compileComponents();

    fixture = TestBed.createComponent(Katalog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
