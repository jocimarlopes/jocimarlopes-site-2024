import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent  implements OnInit {

  screen: number = window.innerWidth
  languages: any = []
  softwares: any = []

  constructor() { }

  ngOnInit() {
    this.changeScreen()
    this.addLanguages()
    this.addSoftwares()
  }

  changeScreen() {
    addEventListener("resize", () => this.screen = window.innerWidth)
  }

  addLanguages() {
    this.languages = [
      {title: 'HTML', value: 0.98},
      {title: 'CSS', value: 0.98},
      {title: 'JavaScript', value: 0.94},
      {title: 'TypeScript', value: 0.90},
      {title: 'Ionic Framework', value: 0.96},
      {title: 'Angular', value: 0.92},
      {title: 'ReactJS', value: 0.85},
      {title: 'React Native', value: 0.86},
      {title: 'Cordova/Capacitor', value: 0.90},
      {title: 'Python', value: 0.88},
      {title: 'Flask', value: 0.95},
      {title: 'NodeJS', value: 0.85},
      {title: 'SQL', value: 0.88},

    ]
  }

  addSoftwares() {
    this.softwares = [
      {title: 'Linux', value: 0.95},
      {title: 'Windows', value: 0.80},
      {title: 'macOS', value: 0.90},
      {title: 'Xcode', value: 0.80},
      {title: 'GIT', value: 0.95},
      {title: 'CLI', value: 0.95},
      {title: 'VS Code', value: 0.95},
      {title: 'Amazon Web Services (AWS)', value: 0.95},
      {title: 'Google Cloud', value: 0.95},
      {title: 'Docker', value: 0.85},
      {title: 'Heroku', value: 0.88},
      {title: 'Trello', value: 0.90},
      {title: 'Jira', value: 0.80},
    ]
  }

}
