import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CronogramaNewComponent } from './cronograma-new.component';

describe('CronogramaNewComponent', () => {
  let component: CronogramaNewComponent;
  let fixture: ComponentFixture<CronogramaNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CronogramaNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CronogramaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
