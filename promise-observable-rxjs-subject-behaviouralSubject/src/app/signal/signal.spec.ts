import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signal } from './signal';

describe('Signal', () => {
  let component: Signal;
  let fixture: ComponentFixture<Signal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Signal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
