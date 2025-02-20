import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule], 
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  
  SkilltreeNow = [
    { img: "html.icon.png", name: "SKILLS.HTML" },
    { img: "css.icon.png", name: "SKILLS.CSS" },
    { img: "js.icon.png", name: "SKILLS.JAVASCRIPT" },
    { img: "ts.icon.png", name: "SKILLS.TYPESCRIPT" },
    { img: "angular.icon.png", name: "SKILLS.ANGULAR" },
    { img: "firebase.icon.png", name: "SKILLS.FIREBASE" },
    { img: "git.icon.png", name: "SKILLS.GIT" },
    { img: "api.icon.png", name: "SKILLS.REST_API" },
    { img: "scrum.icon.png", name: "SKILLS.SCRUM" },
    { img: "material.icon.png", name: "SKILLS.MATERIAL" }
  ];

  SkilltreeLearning = [
    { img: "python.icon.png", name: "SKILLS.PYTHON" },
    { img: "django.icon.png", name: "SKILLS.DJANGO" }
  ];
}
