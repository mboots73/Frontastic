import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { AngularFireAuth,  AngularFireAuthModule } from 'angularfire2/auth';
import { Observable } from 'rxjs/Rx';
import { AuthService } from "./auth.service";

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';


@Injectable()
export class AuthguardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> |Promise<boolean> | boolean  {
    return this.auth.afAuth.authState
    .take(1)
    .map(authState => !!authState)
    .do(authenticated => {
      if (!authenticated) {
        this.router.navigate(['']);
    }
  });
  }
}
