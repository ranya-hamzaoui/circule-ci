import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class TraitementService {

  constructor(private SharedService:SharedService) { }

  multipleNum(a:number,b:number) {
    this.SharedService.sharedFunc();
    return a * b
  }
}
