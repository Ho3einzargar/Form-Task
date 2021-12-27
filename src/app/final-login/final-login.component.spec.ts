import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalLoginComponent } from './final-login.component';

describe('FinalLoginComponent', () => {
  let component: FinalLoginComponent;
  let fixture: ComponentFixture<FinalLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
