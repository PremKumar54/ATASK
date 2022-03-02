import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getUsers(){
   return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getUser(id:number){
   return this.http.get('https://jsonplaceholder.typicode.com/users/'+id);

  }
  getAlbums(){
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
   }

  
  
}
