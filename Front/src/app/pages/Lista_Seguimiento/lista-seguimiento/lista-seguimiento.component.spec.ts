import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSeguimientoComponent } from './lista-seguimiento.component';

describe('ListaSeguimientoComponent', () => {
  let component: ListaSeguimientoComponent;
  let fixture: ComponentFixture<ListaSeguimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSeguimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSeguimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
