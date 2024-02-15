import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe, DatePipe, JsonPipe } from '@angular/common';
import { UserService } from './user.service';
import { Activity, ActivityService } from './activity.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, JsonPipe, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  title = 'timestamp';

  user$ = this.userService.user$;
  authState$ = this.userService.authState$;
  idToken$ = this.userService.idToken$;

  activities$ = this.activityService.activities$;
  log$ = this.activityService.log$;

  constructor(
    private userService: UserService,
    private activityService: ActivityService) {
  }

  newActivity(input: HTMLInputElement) {
    this.activityService.newActivity(input.value);
    input.value = '';
  }

  logAcvtivity(activity: Activity) {
    this.activityService.logAcvtivity(activity);
  }

  signInAnonymously() {
    this.userService.signInAnonymously();
  }

  signInWithGoogle() {

  }


}
