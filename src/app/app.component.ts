import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe, DatePipe, JsonPipe } from '@angular/common';
import { UserService } from './user.service';
import { Activity, ActivityService } from './activity.service';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, JsonPipe, DatePipe, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {


  constructor() {
  }



}
