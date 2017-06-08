import { Component } from '@angular/core';
import {LocalStorage, SessionStorage} from "angular2-localstorage/WebStorage";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    @LocalStorage() public lastSearchQuery:Object = {};
    // @LocalStorage('differentLocalStorageKey') public lastSearchQuery:Object = {};
}
