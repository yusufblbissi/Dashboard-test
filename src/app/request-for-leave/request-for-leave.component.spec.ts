import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestForLeaveComponent } from './request-for-leave.component';

describe('RequestForLeaveComponent', () => {
  let component: RequestForLeaveComponent;
  let fixture: ComponentFixture<RequestForLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestForLeaveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestForLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
