import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactLandingpageComponent } from './contact-landingpage.component';

describe('ContactLandingpageComponent', () => {
  let component: ContactLandingpageComponent;
  let fixture: ComponentFixture<ContactLandingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactLandingpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactLandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
