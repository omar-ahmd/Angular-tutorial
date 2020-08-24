import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { UserInfo } from './user-info';

@Injectable({
  providedIn: 'root'
})
export class EnrollementService {
  
  _url='http://localhost:3000/enroll';
  constructor(private _http : HttpClient) { }

  enroll(user:UserInfo){
    return this._http.post<any>(this._url,user);
  }
}
