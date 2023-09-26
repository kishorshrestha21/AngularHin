import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Textsec1Component } from './textsec1.component';

describe('Textsec1Component', () => {
  let component: Textsec1Component;
  let fixture: ComponentFixture<Textsec1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Textsec1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Textsec1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
