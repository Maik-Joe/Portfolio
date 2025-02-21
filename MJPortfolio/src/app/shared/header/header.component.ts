import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('de');
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  closeMenuOnOverlayClick(event: Event) {
    if ((event.target as HTMLElement).tagName === 'NAV') {
      this.closeMenu();
    }
  }
  
}
