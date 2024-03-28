import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogActivitiesComponent } from './log-activities.component';

describe('LogActivitiesComponent', () => {
  let component: LogActivitiesComponent;
  let fixture: ComponentFixture<LogActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogActivitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
