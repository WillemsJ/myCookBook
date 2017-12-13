import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishNavComponent } from './dish-nav.component';

describe('DishNavComponent', () => {
  let component: DishNavComponent;
  let fixture: ComponentFixture<DishNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
