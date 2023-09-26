import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SOneComponent } from './s-one.component';

describe('SOneComponent', () => {
  let component: SOneComponent;
  let fixture: ComponentFixture<SOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
