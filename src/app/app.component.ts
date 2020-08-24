import { Component } from '@angular/core';
import { UserInfo } from './user-info'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular','React','Vue'];
  userModel = new UserInfo('','',55,'','',true);
}
