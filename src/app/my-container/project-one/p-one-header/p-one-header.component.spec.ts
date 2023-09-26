import { ComponentFixture, TestBed } from '@angular/core/testing';

import { POneHeaderComponent } from './p-one-header.component';

describe('POneHeaderComponent', () => {
  let component: POneHeaderComponent;
  let fixture: ComponentFixture<POneHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ POneHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(POneHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
