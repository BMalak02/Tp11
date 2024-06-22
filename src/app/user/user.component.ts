import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  name="malak";
  location="medenine";
  status="active";
  Message="";
  constructor( private router : Router ) {}

  getStatus() {
    return this.status;
  }

  getMessage(){
    console.log("my new message");
  }
   goToRegister(){
    this.router.navigate(["/register"])
   }
 


}
