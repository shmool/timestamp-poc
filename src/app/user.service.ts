import { Injectable, inject } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  User,
  authState,
  idToken,
  signInAnonymously,
  user,
  signInWithPopup, linkWithPopup
} from '@angular/fire/auth';
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
  currentUser = this.auth.currentUser;

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

  signInWithGoogle() {

    const provider = new GoogleAuthProvider();
    console.log('current user:', this.auth.currentUser);

    if (this.auth.currentUser) {
      linkWithPopup(this.auth.currentUser!, provider).then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        console.log("Anonymous account successfully upgraded", user);

        const newUserObj: any = {
          id: user.uid,
          isAnonymous: false,
          name: user.displayName,
          email: user.email,
          avatar: user.photoURL
        };
        set(ref(this.database, `users/${user.uid}`), newUserObj)

      }).catch((error) => {
        console.log("Error upgrading anonymous account", error);
      });

    } else {
      signInWithPopup(this.auth, provider)
    }
  }

  signOut() {
    this.auth.signOut();
  }
}
