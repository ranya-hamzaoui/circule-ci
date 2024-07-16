import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  providers :[AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {   
  
  constructor(private  authService :AuthService ){}

  login (username:string,password:string) {
   return this.authService.login(username,password)
  }

}
