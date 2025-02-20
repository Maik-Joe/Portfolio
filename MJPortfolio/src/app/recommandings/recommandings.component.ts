import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-recommandings',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './recommandings.component.html',
  styleUrls: ['./recommandings.component.scss']
})
export class RecommandingsComponent {
  activeBox: HTMLElement | null = null;

  recommendations = [
    {
      textKey: 'RECOMMANDINGS.REC1.TEXT',
      author: 'Tarik Sabanovic'
    },
    {
      textKey: 'RECOMMANDINGS.REC2.TEXT',
      author: 'Ioannis Karakasidis'
    },
    {
      textKey: 'RECOMMANDINGS.REC3.TEXT',
      author: 'Lukas Froh'
    }
  ];

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  toggleActive(event: Event) {
    const target = event.currentTarget as HTMLElement;

    if (this.activeBox === target) {
      this.renderer.removeClass(target, 'active');
      this.activeBox = null;
    } else {
      if (this.activeBox) {
        this.renderer.removeClass(this.activeBox, 'active');
      }
      this.renderer.addClass(target, 'active');
      this.activeBox = target;
    }
  }
}
