import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLandingpageComponent } from './navbar-landingpage.component';

describe('NavbarLandingpageComponent', () => {
  let component: NavbarLandingpageComponent;
  let fixture: ComponentFixture<NavbarLandingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarLandingpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarLandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
