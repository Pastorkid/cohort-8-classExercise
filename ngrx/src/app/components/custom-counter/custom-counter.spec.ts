import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomCounter } from './custom-counter';

describe('CustomCounter', () => {
  let component: CustomCounter;
  let fixture: ComponentFixture<CustomCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomCounter],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomCounter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
