import { Component, ElementRef, OnInit } from '@angular/core';
import gsap, { Power1 } from "gsap";
import SplitType from 'split-type'

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent  implements OnInit {

  icons: any = []
  q: any

  constructor(
    private el: ElementRef
  ) {
    this.q = gsap.utils.selector(el);

  }

  ngOnInit() {
    this.addIcons()
    this.initAnimations()
  }

  initAnimations() {
    this.animateHeaderButtons()
  }

  addIcons() {
    this.icons = [
      'logo-javascript',
      'logo-python',
      'logo-tux',
      'logo-google',
      'logo-amazon'
    ]
  }

  async animateHeaderButtons() {
    setTimeout(async () => {
      await gsap.from(this.q(".buttons"),
        {
          delay: 2,
          y: '-15vh',
          opacity: 1,
          stagger: 0.4,
          duration: 0.8,
          ease: 'bounce.out',
          repeat: 0
        }
      )
    }, 20);
  }

}
