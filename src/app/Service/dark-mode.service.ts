import { isPlatformBrowser } from '@angular/common';
import { effect, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { window } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private readonly platformId = inject(PLATFORM_ID);

  darkModeSignal = signal<string>(
  (isPlatformBrowser(this.platformId)) && JSON.parse(localStorage.getItem('darkModeSignal') ?? 'null')
  );

  updateDarkMode= (value:string) => {
   this.darkModeSignal.update((value)=> value ==="dark" ? 'null' : "dark" )
  }
  constructor() {
    effect(()=>{
      if(isPlatformBrowser(this.platformId)){    
          localStorage.setItem('darkModeSignal', JSON.stringify(this.darkModeSignal()))
    }
    })
   }
}
