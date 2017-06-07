import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { ProgressComponent } from './progress/progress.component';
import { CoursesComponent } from './courses/courses.component';
import { HtmlComponent} from './courses/html/html.component';
import { CssComponent } from './courses/css/css.component';
import { JqueryComponent } from './courses/jquery/jquery.component';
import { JavascriptComponent } from './courses/javascript/javascript.component';
import { ThreejsComponent } from './courses/threejs/threejs.component';
import { AngularjsComponent } from './courses/angularjs/angularjs.component';
import { EmberjsComponent } from './courses/emberjs/emberjs.component';
import { BootstrapComponent } from './courses/bootstrap/bootstrap.component';
import { UsersComponent } from './users/users.component';
import { Lesson1Component } from './courses/template/lesson1/lesson1.component';
import { NewcourseComponent } from './courses/newcourse/newcourse.component';
import { LoginComponent } from './login/login.component';
import { AuthguardService } from './authguard.service';

const APP_ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { path: 'courses', component: HomeComponent, canActivate: [AuthguardService] },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/settings', component: SettingsComponent},//canActivate: [AuthguardService] }
  { path: 'profile/progress', component: ProgressComponent},//canActivate: [AuthguardService] }
  { path: 'profile/users', component: UsersComponent},//canActivate: [AuthguardService] }
  { path: 'courses/html', component: HtmlComponent},//canActivate: [AuthguardService] }
  { path: 'courses/css', component: CssComponent},//canActivate: [AuthguardService] }
  { path: 'courses/jquery', component: JqueryComponent},//canActivate: [AuthguardService] }
  { path: 'courses/javascript', component: JavascriptComponent},//canActivate: [AuthguardService] }
  { path: 'courses/threejs', component: ThreejsComponent},//canActivate: [AuthguardService] }
  { path: 'courses/angularjs', component: AngularjsComponent},//canActivate: [AuthguardService] }
  { path: 'courses/emberjs', component: EmberjsComponent},//canActivate: [AuthguardService] }
  { path: 'courses/bootstrap', component: BootstrapComponent},//canActivate: [AuthguardService] }
  { path: 'courses/html/lesson1', component: Lesson1Component},//canActivate: [AuthguardService] }
  { path: 'courses/newcourse', component: NewcourseComponent},//canActivate: [AuthguardService] },
  { path: '**', component: NewcourseComponent}//canActivate: [AuthguardService] }

];

export const routing = RouterModule.forRoot(APP_ROUTES);
