import { Component } from '@angular/core';
import { UserInfo } from './user-info'
import { EnrollementService } from './enrollement.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular','React','Vue'];
  userModel = new UserInfo('','',55,'','',true);
  submitted=false;
  constructor(private _enrservice:EnrollementService) {
    
  }

  OnSubmit(){
    this.submitted=true;
    this._enrservice.enroll(this.userModel)
        .subscribe(
          data => console.log("success!",data),
          error=>console.log("error!",error)
          
        )
  }

}
