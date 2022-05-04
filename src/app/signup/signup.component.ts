import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {SignupService} from '../services/signup.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private response:any = [];

  constructor(private router:Router,private service:SignupService) {
   
  }


  ngOnInit(): void {
  }


  signup(data:any)
  {
    this.service.singup(data).subscribe(    
      (res)=>    
      { 
       this.response=res;
        console.warn(this.response.status+" "+this.response.message+" "+this.response.user)  
      if(this.response.status="Valid")
      {
        this.router.navigate(['/login']); 
        alert("Successfull, Please Login ")  
      }
           
      });    
  }

}
