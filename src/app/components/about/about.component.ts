import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent  implements OnInit {

  icons: any = []

  constructor() { }

  ngOnInit() {
    this.addIcons()
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

}
