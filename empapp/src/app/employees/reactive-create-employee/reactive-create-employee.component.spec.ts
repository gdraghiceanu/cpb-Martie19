import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveCreateEmployeeComponent } from './reactive-create-employee.component';

describe('ReactiveCreateEmployeeComponent', () => {
  let component: ReactiveCreateEmployeeComponent;
  let fixture: ComponentFixture<ReactiveCreateEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveCreateEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveCreateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
