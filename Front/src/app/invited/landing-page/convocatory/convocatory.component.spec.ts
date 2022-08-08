import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvocatoryComponent } from './convocatory.component';

describe('ConvocatoryComponent', () => {
  let component: ConvocatoryComponent;
  let fixture: ComponentFixture<ConvocatoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvocatoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvocatoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
