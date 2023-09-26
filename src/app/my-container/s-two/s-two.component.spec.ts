import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STwoComponent } from './s-two.component';

describe('STwoComponent', () => {
  let component: STwoComponent;
  let fixture: ComponentFixture<STwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(STwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
