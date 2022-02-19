import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from 'src/app/models/users';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }
  // getAll():Observable<any>{
  //   return this.http.get<Register>('https://api.alamaltaqa.com/Department/GetHomeDepartments');

  // }
}
