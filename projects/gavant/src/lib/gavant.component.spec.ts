import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GavantComponent } from './gavant.component';

describe('GavantComponent', () => {
  let component: GavantComponent;
  let fixture: ComponentFixture<GavantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GavantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GavantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
