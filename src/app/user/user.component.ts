import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  user$ = this.userService.user$;
  authState$ = this.userService.authState$;
  idToken$ = this.userService.idToken$;

  constructor(
    private userService: UserService) {
  }

  signInAnonymously() {
    this.userService.signInAnonymously();
  }

  signInWithGoogle() {
    this.userService.signInWithGoogle();
  }

  signOut() {
    this.userService.signOut();
  }

}
