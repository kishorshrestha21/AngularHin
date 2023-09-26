import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildChildrenComponent } from './viewchild-children.component';

describe('ViewchildChildrenComponent', () => {
  let component: ViewchildChildrenComponent;
  let fixture: ComponentFixture<ViewchildChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewchildChildrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchildChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
