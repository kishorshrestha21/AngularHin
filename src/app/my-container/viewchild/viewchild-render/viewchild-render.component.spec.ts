import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildRenderComponent } from './viewchild-render.component';

describe('ViewchildRenderComponent', () => {
  let component: ViewchildRenderComponent;
  let fixture: ComponentFixture<ViewchildRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewchildRenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchildRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
