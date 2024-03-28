import { Component } from '@angular/core';
import { Activity, ActivityService } from '../activity.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-log-activities',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './log-activities.component.html',
  styleUrl: './log-activities.component.scss'
})
export class LogActivitiesComponent {
  activities$ = this.activityService.activities$;
 constructor(
    private activityService: ActivityService) {
  }

  logAcvtivity(activity: Activity) {
    this.activityService.logAcvtivity(activity);
  }
}
