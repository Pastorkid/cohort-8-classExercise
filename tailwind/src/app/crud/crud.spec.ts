import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Crud } from './crud';

describe('Crud', () => {
  let component: Crud;
  let fixture: ComponentFixture<Crud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Crud],
    }).compileComponents();

    fixture = TestBed.createComponent(Crud);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
