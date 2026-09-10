import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstResusableComponet } from './my-first-resusable-componet';

describe('MyFirstResusableComponet', () => {
  let component: MyFirstResusableComponet;
  let fixture: ComponentFixture<MyFirstResusableComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyFirstResusableComponet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFirstResusableComponet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
