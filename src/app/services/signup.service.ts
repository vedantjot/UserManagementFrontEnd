import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SignupService {
  
  headers={
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  }
    constructor(private httpClient: HttpClient) { }

    singup(data:any){
      return this.httpClient.post('https://localhost:44329/api/users/singup',data,this.headers);
    }

    //alert
}
