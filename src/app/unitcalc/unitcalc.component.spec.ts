import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitcalcComponent } from './unitcalc.component';

describe('UnitcalcComponent', () => {
  let component: UnitcalcComponent;
  let fixture: ComponentFixture<UnitcalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitcalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitcalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
