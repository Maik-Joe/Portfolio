import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-recommandings',
  templateUrl: './recommandings.component.html',
  styleUrl: './recommandings.component.scss'
})
export class RecommandingsComponent {
  activeBox: HTMLElement | null = null;

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
