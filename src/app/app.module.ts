import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ProfileComponent } from './profile/profile.component';
import {routing } from './app.routing';
import { HomeComponent } from './home.component';
import { SettingsComponent } from './settings/settings.component';
import { ProgressComponent } from './progress/progress.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CourseItemComponent } from './courses/course-list/course-item.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { CourseService } from './courses/course.service';
import { HtmlComponent } from './courses/html/html.component';
import { CssComponent } from './courses/css/css.component';
import { JavascriptComponent } from './courses/javascript/javascript.component';
import { JqueryComponent } from './courses/jquery/jquery.component';
import { AngularjsComponent } from './courses/angularjs/angularjs.component';
import { ThreejsComponent } from './courses/threejs/threejs.component';
import { EmberjsComponent } from './courses/emberjs/emberjs.component';
import { BootstrapComponent } from './courses/bootstrap/bootstrap.component';
import {TabsComponent} from './courses/html/tabs.component';
import {TabComponent} from './courses/html/tab.component';
import { UsersComponent } from './users/users.component';
import { Lesson1Component } from './courses/html/lesson1/lesson1.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    HomeComponent,
    SettingsComponent,
    ProgressComponent,
    CoursesComponent,
    CourseListComponent,
    CourseItemComponent,
    CourseDetailComponent,
    HtmlComponent,
    CssComponent,
    JavascriptComponent,
    JqueryComponent,
    AngularjsComponent,
    ThreejsComponent,
    EmberjsComponent,
    BootstrapComponent,
    TabsComponent,
    TabComponent,
    UsersComponent,
    Lesson1Component,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ CourseService ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
