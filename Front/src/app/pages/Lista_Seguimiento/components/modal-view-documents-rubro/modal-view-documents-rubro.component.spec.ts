import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalViewDocumentsRubroComponent } from './modal-view-documents-rubro.component';

describe('ModalViewDocumentsRubroComponent', () => {
  let component: ModalViewDocumentsRubroComponent;
  let fixture: ComponentFixture<ModalViewDocumentsRubroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalViewDocumentsRubroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalViewDocumentsRubroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
