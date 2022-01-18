import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iuser } from '../users/list-users/list-users.component';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl:string='http://localhost:3000/'
  //baseUrl:string='//localhost:3000/'
  //http://localhost:3000/posts
  constructor(private http:HttpClient) { }

  listUsers():Observable<Iuser[]>{
    //return this.http.get(this.baseUrl+'users');
    return this.http.get<Iuser[]>(this.baseUrl+'users');
  }

  viewUsers(id:string){
    return this.http.get(this.baseUrl+'users/'+id);
  }
  addUsers(userObj:any)
  {
    return this.http.post(this.baseUrl + 'users',userObj)
  }

  deleteUsers(userId:any)
  {
    return this.http.delete(this.baseUrl +'users/'+userId)
  }
}
