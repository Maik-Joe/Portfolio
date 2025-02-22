import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  projects = [
    {
      name: 'Join', 
      descriptionKeys: [
        'PORTFOLIO.JOIN.DESCRIPTION1',
        'PORTFOLIO.JOIN.DESCRIPTION2',
        'PORTFOLIO.JOIN.DESCRIPTION3'
      ],
      image: '../../../assets/img/JoinLAP.png',
      technologies: [
        'html.icon.png',
        'css.icon.png',
        'js.icon.png',
        'git.icon.png',
        'firebase.icon.png'
      ],
      demoLink: 'https://join-app-demo.com',
      githubLink: 'https://github.com/Maik-Joe/Join-.git'
    },
    {
      name: 'Hogwarts API', 
      descriptionKeys: [
        'PORTFOLIO.HOGWARTS_API.DESCRIPTION1',
        'PORTFOLIO.HOGWARTS_API.DESCRIPTION2',
        'PORTFOLIO.HOGWARTS_API.DESCRIPTION3'
      ],
      image: '../../../assets/img/HogwartsApiLAP.png',
      technologies: [
        'html.icon.png',
        'css.icon.png',
        'js.icon.png',
        'api.icon.png'
      ],
      demoLink: 'https://hogwarts-api-demo.com',
      githubLink: 'https://github.com/Maik-Joe/HogwartsAPI.git'
    },
    {
      name: 'EL pollo loco', 
      descriptionKeys: [
        'PORTFOLIO.EL_POLLO_LOCO.DESCRIPTION1',
        'PORTFOLIO.EL_POLLO_LOCO.DESCRIPTION2',
        'PORTFOLIO.EL_POLLO_LOCO.DESCRIPTION3'
      ],
      image: '../../../assets/img/ElpolloLAP.png',
      technologies: [
        'html.icon.png',
        'css.icon.png',
        'js.icon.png'
      ],
      demoLink: 'https://el-pollo-loco-demo.com',
      githubLink: 'https://github.com/Maik-Joe/El-pollo-loco.git'
    }
  ];

  selectedProject = this.projects[0];

  selectProject(project: any) {
    this.selectedProject = project;
  }
}
