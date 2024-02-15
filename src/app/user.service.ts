import { Injectable, inject } from '@angular/core';
import { Auth, User, authState, idToken, signInAnonymously, user } from '@angular/fire/auth';
import { Database, push, ref, set } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private auth: Auth = inject(Auth);
  user$ = user(this.auth);
  authState$ = authState(this.auth);
  idToken$ = idToken(this.auth);
  userData: User | null | undefined;

  private database: Database = inject(Database);

  constructor() {
    this.user$.subscribe(user => {
      this.userData = user;
    })
  }

  signInAnonymously() {
    signInAnonymously(this.auth).then(userCred => {
      // we can check if the user already exists,
      // but with anonymous user it currently doesn't matter
      const newUserObj: any = {
        id: userCred.user.uid,
        isAnonymous: true
      };
      set(ref(this.database, `users/${userCred.user.uid}`), newUserObj)
    });
  }
}
