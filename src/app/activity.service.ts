import { Injectable, inject } from '@angular/core';
import { Database, listVal, push, ref, set } from '@angular/fire/database';
import { Observable, map, switchMap, tap } from 'rxjs';
import { UserService } from './user.service';

export interface Activity {
  name: string;
  id: string;
  isContinual?: boolean;
  color?: string;
}

export interface LogItem {
  id: string;
  activity: string;
  timestamp: number;
}

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private database: Database = inject(Database);
  activityDB$ = this.userService.user$.pipe(
    map(user => ref(this.database, `activities/${user?.uid}/buttons`))
  )
  activities$: Observable<Activity[]> = this.activityDB$.pipe(
    switchMap(activityDB => listVal<Activity>(activityDB))
  )

  logDB$ = this.userService.user$.pipe(
    map(user => ref(this.database, `activities/${user?.uid}/log`))
  )
  log$: Observable<LogItem[]> = this.logDB$.pipe(
    switchMap(logDB => listVal<LogItem>(logDB)),
    tap(console.log)
  )

  constructor(private userService: UserService) {
  }

  newActivity(name: string) {
    const newActivityRef = push(ref(
      this.database, `activities/${this.userService.userData?.uid}/buttons`));
    const newActivityObj: any = {
      id: newActivityRef.key,
      name,
      isContinual: false
    };
    set(newActivityRef, newActivityObj)
  }

  logAcvtivity(activity: Activity) {
    const newLogRef = push(ref(
      this.database, `activities/${this.userService.userData?.uid}/log`));
    const newLogObj: any = {
      id: newLogRef.key,
      activity: activity.name,
      timestamp: Date.now()
    };
    set(newLogRef, newLogObj)
  }
}

