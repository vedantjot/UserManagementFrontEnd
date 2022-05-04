import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  headers={
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

  constructor(private httpClient: HttpClient) { }

  login(data:any){
    return this.httpClient.post('https://localhost:44329/api/users/login',data,this.headers);
  }

  
}
