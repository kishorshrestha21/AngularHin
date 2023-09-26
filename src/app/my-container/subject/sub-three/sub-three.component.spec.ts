import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubThreeComponent } from './sub-three.component';

describe('SubThreeComponent', () => {
  let component: SubThreeComponent;
  let fixture: ComponentFixture<SubThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
