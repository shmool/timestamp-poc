import { Component } from '@angular/core';
import { ActivityService } from '../activity.service';
import { AsyncPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-view-activity-log',
  standalone: true,
  imports: [AsyncPipe, DatePipe],
  templateUrl: './view-activity-log.component.html',
  styleUrl: './view-activity-log.component.scss'
})
export class ViewActivityLogComponent {
  log$ = this.activityService.log$;
  constructor(
    private activityService: ActivityService) {
  }


}
