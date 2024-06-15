import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffTodayComponent } from './off-today.component';

describe('OffTodayComponent', () => {
  let component: OffTodayComponent;
  let fixture: ComponentFixture<OffTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffTodayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
