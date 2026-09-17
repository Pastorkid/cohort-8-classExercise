import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalForms } from './signal-forms';

describe('SignalForms', () => {
  let component: SignalForms;
  let fixture: ComponentFixture<SignalForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
