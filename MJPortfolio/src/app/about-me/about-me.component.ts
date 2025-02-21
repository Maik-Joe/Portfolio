import { Component, HostListener } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule], 
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  @HostListener('window:scroll', [])
  onScroll(): void {
    const lines = document.querySelectorAll('.line') as NodeListOf<HTMLElement>;
    const isMobile = window.innerWidth <= 849; // Setzt das Breakpoint für Responsivität

    lines.forEach((line) => {
      const rect = line.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        line.style.width = isMobile ? '80%' : '47%'; 
      } else {
        line.style.width = '0';
      }
    });
  }
}
