import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  @HostListener('window:scroll', [])
  onScroll(): void {
    const lines = document.querySelectorAll('.line') as NodeListOf<HTMLElement>;
    lines.forEach((line) => {
      const rect = line.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        line.style.width = '47%';
      } else {
        line.style.width = '0';
      }
    });
  }
}
