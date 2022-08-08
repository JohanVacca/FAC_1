import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoRubroComponent } from './seguimiento-rubro.component';

describe('SeguimientoRubroComponent', () => {
  let component: SeguimientoRubroComponent;
  let fixture: ComponentFixture<SeguimientoRubroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguimientoRubroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientoRubroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
