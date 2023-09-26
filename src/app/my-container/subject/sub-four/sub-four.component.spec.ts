import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubFourComponent } from './sub-four.component';

describe('SubFourComponent', () => {
  let component: SubFourComponent;
  let fixture: ComponentFixture<SubFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
