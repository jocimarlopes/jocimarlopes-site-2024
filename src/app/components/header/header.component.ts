import { Component, ElementRef, OnInit } from '@angular/core';
import gsap, { Power1 } from "gsap";
import SplitType from 'split-type'

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  botoes: any = []
  screen: any = window.innerWidth
  q: any
  constructor(
    private el: ElementRef
  ) {
    this.q = gsap.utils.selector(el);

  }

  ngOnInit() {
    this.changeScreen()
    this.iniciarBotoes()
    this.initAnimations()
  }

  initAnimations() {
    this.animateImage()
    this.animateName()
    this.animateSubtitle()
    this.animateHeaderButtons()
  }

  changeScreen() {
    addEventListener("resize", () => this.screen = window.innerWidth)
  }


  iniciarBotoes() {
    this.botoes = [
      {
        id: 1,
        icon: 'logo-linkedin',
        link: 'https://www.linkedin.com/in/jocimarlopes/'
      },
      {
        id: 2,
        icon: 'logo-instagram',
        link: 'https://www.instagram.com/jocimarlopes/'
      },
      {
        id: 3,
        icon: 'logo-whatsapp',
        link: 'https://wa.me/5551996919023'
      },
      {
        id: 4,
        icon: 'mail-outline',
        link: 'mailto:lopes.jocimar@gmail.com'
      },
      {
        id: 5,
        icon: 'logo-github',
        link: 'https://github.com/jocimarlopes'
      },
    ]
  }

  goToPage(url: string) {
    var anchor = document.createElement('a');
    anchor.href = url;
    anchor.target = "_blank";
    anchor.click();
  }

  async animateImage() {
    await gsap.to('#image', {
      delay: 1, duration: 0.2, width: '6%', height: '3%', marginTop: '75px', repeat: 0, onComplete: () => {
        gsap.to("#image", { duration: 1, x: '-100vw', ease: 'power4.inOut', repeat: 0 })
      }
    })
    setTimeout(async () => {
      await gsap.fromTo("#image",
        { duration: 1, width: '6%', height: '3%', x: '100vw', repeat: 0 },
        {
          ease: 'power4.inOut', repeat: 0, x: 0, onComplete: () => {
            gsap.to('#image', { marginTop: '21px', width: '150px', height: '150px', repeat: 0, ease: 'power4.inOut' })
          }
        }
      )
    }, 1000);
  }

  animateName() {
    const name = new SplitType('p.name', { types: 'words,chars' })
    const chars = name.chars
    gsap.fromTo(
      chars,
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: 'power4.out',
        repeat: 0
      }
    )
  }

  animateSubtitle() {
    const subtitle = new SplitType('p.subtitle', { types: 'words,chars' })
    const chars = subtitle.chars
    gsap.fromTo(
      chars,
      {
        delay: 1,
        y: 100,
        opacity: 0
      },
      {
        delay: 1,
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 1,
        ease: 'power4.out',
        repeat: 0
      }
    )
  }

  async animateHeaderButtons() {
    setTimeout(async () => {

      await gsap.from(this.q(".buttons"),
        {
          delay: 1,
          y: '10vh',
          opacity: 1,
          stagger: 0.2,
          duration: 2,
          ease: 'elastic.out',
          repeat: 0
        }
      )
    }, 20);

  }


}
