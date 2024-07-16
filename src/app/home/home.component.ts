import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ContentComponent } from '../layouts/content/content.component';
import { FooterComponent } from '../layouts/footer/footer.component';
import { NavbarComponent } from '../layouts/navbar/navbar.component';
import { DarkModeService } from '../Service/dark-mode.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,ContentComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  DarkModeService : DarkModeService = inject(DarkModeService);
}
