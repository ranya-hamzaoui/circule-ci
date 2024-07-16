import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username:string,password:string) : any {
    return (username && password ) ?? undefined
  }
}
