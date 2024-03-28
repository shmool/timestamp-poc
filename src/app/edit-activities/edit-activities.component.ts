import { Component } from '@angular/core';
import { Activity, ActivityService } from '../activity.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-edit-activities',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './edit-activities.component.html',
  styleUrl: './edit-activities.component.scss'
})
export class EditActivitiesComponent {
  activities$ = this.activityService.activities$;
  editedActivity: Activity | null = null;

  constructor(
    private activityService: ActivityService) {
  }
  newActivity(nameInput: HTMLInputElement, colorInput: HTMLInputElement) {
    this.activityService.newActivity(nameInput.value, colorInput.value);
    nameInput.value = '';
  }

  editActivity(activity: Activity) {
    if (this.editedActivity) {
      // todo: prompt "save changes?"
      this.editedActivity.editing = false;
    }
    this.editedActivity = activity;
    activity.editing = true;
  }

  cancelChanges(activity: Activity) {
    activity.editing = false;
    this.editedActivity = null;
  }
  saveChanges(activity: Activity, newName: string, newColor?: string) {
    activity.editing = false;
    activity.name = newName;
    activity.color = newColor;
    this.editedActivity = null;
    this.activityService.editActivity(activity);
  }

  deleteActivity(activity: Activity) {
    const res = confirm(`
Are you sure you want to remove the button ${activity.name}?
This will delete the button, but keep the logged items of this activity.
Click 'OK' to remove, or 'Cancel' to keep this button.`);
    if (res) {
      this.activityService.deleteActivity(activity);
    }
  }


}
