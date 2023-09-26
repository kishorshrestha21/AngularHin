import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildRenderChildComponent } from './view-child-render-child.component';

describe('ViewChildRenderChildComponent', () => {
  let component: ViewChildRenderChildComponent;
  let fixture: ComponentFixture<ViewChildRenderChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChildRenderChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildRenderChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
