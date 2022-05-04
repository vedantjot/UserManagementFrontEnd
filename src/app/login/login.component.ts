import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  private response:any = [];

  constructor(private router:Router,private service:LoginService) {
   
  }

  ngOnInit(): void {
  }

  login(data:any)
  {
    this.service.login(data).subscribe(    
      (res)=>    
      { 
       this.response=res;
        console.warn(this.response.status+" "+this.response.message+" "+this.response.user) 
        
        //statusStr:String =this.response.status;

        
      if(this.response.status==="Valid")
      {
        this.router.navigate(['/dashboard']);   
      }
      else{
        alert(this.response.message)
      }
           
      });    
  }

}
