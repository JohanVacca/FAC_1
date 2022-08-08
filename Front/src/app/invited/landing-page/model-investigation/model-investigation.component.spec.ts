import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelInvestigationComponent } from './model-investigation.component';

describe('ModelInvestigationComponent', () => {
  let component: ModelInvestigationComponent;
  let fixture: ComponentFixture<ModelInvestigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelInvestigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelInvestigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
