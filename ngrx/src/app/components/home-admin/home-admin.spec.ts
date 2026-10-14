import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeAdmin } from './home-admin';

describe('HomeAdmin', () => {
  let component: HomeAdmin;
  let fixture: ComponentFixture<HomeAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAdmin],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeAdmin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
