import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActivityLogComponent } from './view-activity-log.component';

describe('ViewActivityLogComponent', () => {
  let component: ViewActivityLogComponent;
  let fixture: ComponentFixture<ViewActivityLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewActivityLogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewActivityLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
