import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Database, listVal, push, ref, set } from "@angular/fire/database";
import { AsyncPipe, DatePipe, JsonPipe } from '@angular/common';
import { Observable } from "rxjs";

interface Activity {
  name: string;
  id: string;
  isContinual?: boolean;
  color?: string;
}

interface LogItem {
  id: string;
  activity: string;
  timestamp: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, JsonPipe, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  title = 'timestamp';
  private database: Database = inject(Database);
  activityDB = ref(this.database, 'shmool/buttons');
  activities$: Observable<Activity[]> = listVal(this.activityDB);
  logDB = ref(this.database, 'shmool/log');
  log$: Observable<LogItem[]> = listVal(this.logDB);

  constructor() {
  }

  newActivity(input: HTMLInputElement) {
    const newActivityRef = push(ref(this.database, 'shmool/buttons'));
    const newActivityObj: any = {
      id: newActivityRef.key,
      name: input.value,
      isContinual: false
    };
    set(newActivityRef, newActivityObj)

    input.value = '';
  }

  logAcvtivity(activity: Activity) {
    const newLogRef = push(ref(this.database, 'shmool/log'));
    const newLogObj: any = {
      id: newLogRef.key,
      activity: activity.name,
      timestamp: Date.now()
    };
    set(newLogRef, newLogObj)
  }

}
