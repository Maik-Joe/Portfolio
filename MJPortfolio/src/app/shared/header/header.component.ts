import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core'; // ❗ Importiert

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule], // ❗ Muss hier stehen!
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('de');
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
