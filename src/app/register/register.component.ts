import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {
  active=true;
  firstName="Ameni";
  constructor( private router : Router ) {}

  
  goToUser(){
    this.router.navigate(["/user"])
   }
}
