import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFacComponent } from './info-fac.component';

describe('InfoFacComponent', () => {
  let component: InfoFacComponent;
  let fixture: ComponentFixture<InfoFacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoFacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoFacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
