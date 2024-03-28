import { Routes } from '@angular/router';
import { LogActivitiesComponent } from './log-activities/log-activities.component';
import { UserComponent } from './user/user.component';
import { ViewActivityLogComponent } from './view-activity-log/view-activity-log.component';
import { EditActivitiesComponent } from './edit-activities/edit-activities.component';

export const routes: Routes = [
  { path: '', component: LogActivitiesComponent, title: 'Home - Log Activities' },
  { path: 'user', component: UserComponent, title: 'User' },
  { path: 'log', component: ViewActivityLogComponent, title: 'View Log' },
  { path: 'edit-buttons', component: EditActivitiesComponent, title: 'Edit Activities' },
];
