import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { AboutMeComponent } from "../about-me/about-me.component";
import { SkillsComponent } from "../skills/skills.component";

@Component({
  selector: 'app-landing-page',
  imports: [HeroComponent,
    HeaderComponent,
    FooterComponent, 
    AboutMeComponent, 
    SkillsComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
