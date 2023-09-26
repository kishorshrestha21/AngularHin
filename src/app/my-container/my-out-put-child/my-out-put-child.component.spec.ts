import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOutPutChildComponent } from './my-out-put-child.component';

describe('MyOutPutChildComponent', () => {
  let component: MyOutPutChildComponent;
  let fixture: ComponentFixture<MyOutPutChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyOutPutChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOutPutChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
