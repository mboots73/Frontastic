import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth,  AngularFireAuthModule } from 'angularfire2/auth';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';


@Injectable()
export class AuthguardService implements CanActivate {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  canActivate():Observable<boolean> {
    return this.afAuth.authState
    .take(1)
    .map(authState => !authState)
    .do(authenticated => {
      if
      (!authenticated) this.router.navigateByUrl('/');
    })
  }
}
