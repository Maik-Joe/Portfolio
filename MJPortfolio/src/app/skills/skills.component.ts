import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {


  SkilltreeNow = [
    {
      img: "html.icon.png",
      name: "HTML",
    },
    {
      img: "css.icon.png",
      name: "CSS",
    },
    {
      img: "js.icon.png",
      name: "JAVASCRIPT",
    },
    {
      img: "ts.icon.png",
      name: "TYPESCRIPT",
    },
    {
      img: "angular.icon.png",
      name: "ANGULAR",
    },
    {
      img: "firebase.icon.png",
      name: "FIREBASE",
    },
    {
      img: "git.icon.png",
      name: "GIT",
    },
    {
      img: "api.icon.png",
      name: "REST API",
    },
    {
      img: "scrum.icon.png",
      name: "SCRUM",
    },
    {
      img: "material.icon.png",
      name: "MATERIAL",
    },
  ]

  SkilltreeLearning= [
    {
      img: "figma.icon.png",
      name: "FIGMA",
    },
    {
      img: "css.icon.png",
      name: "CSS",
    },
    {
      img: "js.icon.png",
      name: "JAVASCRIPT",
    },
  ]
}


