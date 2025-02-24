import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen: boolean = false;

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    let savedLang: string | null = null;
    
    if (isPlatformBrowser(this.platformId)) {
      savedLang = localStorage.getItem('selectedLanguage');
    }

    const defaultLang: string = savedLang ?? 'de';
    this.translate.setDefaultLang(defaultLang);
    this.translate.use(defaultLang);
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('selectedLanguage', lang);
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  closeMenuOnOverlayClick(event: Event): void {
    if ((event.target as HTMLElement).tagName === 'NAV') {
      this.closeMenu();
    }
  }
}
