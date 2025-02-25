import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private viewportScroller: ViewportScroller, private router: Router) {}

  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]); 
  }
}
