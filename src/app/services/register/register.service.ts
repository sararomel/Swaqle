import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from 'src/app/models/users';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  getAll():Observable<any>{
    return this.http.get<Users>('https://api.alamaltaqa.com/User/GetLoggedUserDetails');

  }
}
