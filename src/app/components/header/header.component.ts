import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  botoes: any = []
  screen: any = window.innerWidth

  constructor() { }

  ngOnInit() {
    this.changeScreen()
    this.iniciarBotoes()
  }

  changeScreen() {
    addEventListener("resize", () => this.screen = window.innerWidth)
  }


  iniciarBotoes() {
    this.botoes = [
      {
        icon: 'logo-linkedin',
        link: 'https://www.linkedin.com/in/jocimarlopes/'
      },
      {
        icon: 'logo-instagram',
        link: 'https://www.instagram.com/jocimarlopes/'
      },
      {
        icon: 'logo-whatsapp',
        link: 'https://wa.me/5551996919023'
      },
      {
        icon: 'mail-outline',
        link: 'mailto:lopes.jocimar@gmail.com'
      },
      {
        icon: 'logo-github',
        link: 'https://github.com/jocimarlopes'
      },
    ]
  }

  goToPage(url: string) {
    var anchor = document.createElement('a');
    anchor.href = url;
    anchor.target="_blank";
    anchor.click();
  }
}
