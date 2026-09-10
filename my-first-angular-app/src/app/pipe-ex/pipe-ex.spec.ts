import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeEx } from './pipe-ex';

describe('PipeEx', () => {
  let component: PipeEx;
  let fixture: ComponentFixture<PipeEx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeEx]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeEx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
