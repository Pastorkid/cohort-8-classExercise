import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsPromiseExmaple } from './rxjs-promise-exmaple';

describe('RxjsPromiseExmaple', () => {
  let component: RxjsPromiseExmaple;
  let fixture: ComponentFixture<RxjsPromiseExmaple>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsPromiseExmaple]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsPromiseExmaple);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
