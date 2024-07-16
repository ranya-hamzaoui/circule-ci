import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DarkModeService } from '../../Service/dark-mode.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  DarkModeService : DarkModeService = inject(DarkModeService);

  toggleDarkMode=() => {
    this.DarkModeService.updateDarkMode('dark')
  } 

}
