import { Component, ElementRef, OnInit } from '@angular/core';
import gsap, { Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent  implements OnInit {

  screen: number = window.innerWidth
  languages: any = []
  softwares: any = []
  q: any

  constructor(
    private el: ElementRef
  ) {
    this.q = gsap.utils.selector(el);
  }

  ngOnInit() {
    this.addLanguages()
    this.changeScreen()
    this.addSoftwares()
    this.initAnimations()
  }

  changeScreen() {
    addEventListener("resize", () => this.screen = window.innerWidth)
  }

  initAnimations() {
    // this.animateProgressBar()
  }

  addLanguages() {
    this.languages = [
      {title: 'JavaScript', value: 0.94},
      {title: 'TypeScript', value: 0.90},
      {title: 'Ionic Framework', value: 0.96},
      {title: 'Angular', value: 0.92},
      {title: 'Cordova/Capacitor', value: 0.9},
      {title: 'Python', value: 0.9},
      {title: 'Flask', value: 0.95},
      {title: 'NodeJS', value: 0.8},
      {title: 'SQL', value: 0.7},

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
      {title: 'Amazon Web Services (AWS)', value: 0.6},
      {title: 'Google Cloud', value: 0.6},
      {title: 'Docker', value: 0.85},
      {title: 'API Rest | GraphQL', value: 0.95},
      {title: 'RabbitMQ', value: 0.80},
    ]
  }

  animateProgressBar() {
    setTimeout(async () => {
      gsap.from(this.q(".progress-bar-left"),
        {
          delay: 4,
          width: 0,
          duration: 2,
          stagger: 0.3,
          repeat: 0,
          ease: 'bounce',
        }
      )
      gsap.from(this.q(".progress-bar-right"),
        {
          delay: 4,
          width: 0,
          duration: 2,
          stagger: 0.3,
          repeat: 0,
          ease: 'bounce',
        }
      )
    }, 100);
  }

}
