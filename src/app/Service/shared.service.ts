import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  sharedFunc(){
    console.log('---------- TEST CALL --------- ');
  }
}
