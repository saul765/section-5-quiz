import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedNumbersComponent } from './mixed-numbers.component';

describe('MixedNumbersComponent', () => {
  let component: MixedNumbersComponent;
  let fixture: ComponentFixture<MixedNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MixedNumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MixedNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
