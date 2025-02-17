import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,  // Falls du Standalone Components verwendest
  imports: [CommonModule],  // Hier CommonModule importieren!
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  projects = [
    {
      name: 'Join',
      description: `
       <p>Join is a sophisticated task management app inspired by Kanban boards. It was developed in close collaboration with two other developers and helps teams efficiently organize their tasks.</p><br>
       <p>With drag-and-drop functionality, flexible categories, and an intuitive user interface, Join provides a seamless and efficient workflow. The app is optimized with Firebase for real-time data storage and designed to be fully responsive for both desktop and mobile devices.</p><br>
       <p>The development process was both technically and organizationally challenging, but it provided valuable insights into teamwork, UX design, and scalable architecture.</p>

`,
      image: '../../../assets/img/JoinLAP.png',
      technologies: ['html.icon.png', 'css.icon.png', 'js.icon.png', 'git.icon.png', 'firebase.icon.png'],
      demoLink: 'https://join-app-demo.com',
      githubLink: 'https://github.com/your-repo/join'
    },
    {
      name: 'Hogwarts API',
      description: `
      <p>The Hogwarts API was used to create a dynamic website that displays data on characters, houses, and spells from the world of Harry Potter.</p><br>
      <p>By leveraging RESTful API requests, the site fetches and presents structured information in an interactive and engaging way. Users can explore different aspects of the Harry Potter universe with a clear and responsive design.</p><br>
      <p>The development focused on seamless API integration, efficient data handling, and an intuitive user experience, making the project both technically and creatively rewarding.</p>
`,
      image: '../../../assets/img/HogwartsApiLAP.png',
      technologies: ['html.icon.png', 'css.icon.png', 'js.icon.png', 'api.icon.png'],
      demoLink: 'https://hogwarts-api-demo.com',
      githubLink: 'https://github.com/your-repo/hogwarts-api'
    },
    {
      name: 'El Pollo Loco',
      description: `
      <p>El Pollo Loco is an entertaining 2D jump-and-run game where the player must dodge chickens and defeat dangerous enemies.</p><br>
      <p>The game was developed using native JavaScript canvas elements and follows an object-oriented programming (OOP) approach to ensure clean and modular code.</p><br>
      <p>With smooth animations, responsive controls, and engaging mechanics, El Pollo Loco delivers an immersive gameplay experience while demonstrating the power of OOP in game development.</p>
`,
      image: '../../../assets/img/ElpolloLAP.png',
      technologies: ['html.icon.png', 'css.icon.png', 'js.icon.png'],
      demoLink: 'https://el-pollo-loco-demo.com',
      githubLink: 'https://github.com/your-repo/el-pollo-loco'
    }
  ];

  selectedProject = this.projects[0];

  selectProject(project: any) {
    this.selectedProject = project;
  }
}
