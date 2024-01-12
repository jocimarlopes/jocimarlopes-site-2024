import { Component, OnInit } from '@angular/core';
import gsap from "gsap";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  isDark: boolean = false
  screen: any = window.innerWidth

  constructor() { }

  ngOnInit() {
    this.changeScreen()
    this.addBackground()
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');    
    this.isDark = prefersDark.matches
    this.initializeDarkTheme(prefersDark.matches);
    prefersDark.addEventListener('change', (mediaQuery) => this.initializeDarkTheme(mediaQuery.matches));
  }

  changeScreen() {
    addEventListener("resize", () => this.screen = window.innerWidth)
  }

  initializeDarkTheme(dark: boolean) {
    this.isDark = dark;
    this.toggleDarkTheme(dark);
  }

  toggleDarkTheme(darkMode?: boolean) {
    this.isDark = darkMode ? darkMode : !this.isDark
    document.body.classList.toggle('dark', this.isDark);
  }

  addBackground() {
    gsap.defaults({
      ease: "linear",
      repeat: -1
    });

    // Beach Ball
    gsap.to("#ball-group", { x: -1700, repeatDelay: 10, duration: 30 });
    gsap.to("#ball", 30, {
      rotation: "-4000deg",
      transformOrigin: "center center",
      ease: "linear",
      repeatDelay: 10,
    });

    // Sun
    gsap.set("#sun-group", { x: 1150 });
    gsap.to("#sun-band-1, #sun-band-2", 5, {
      scale: 1.3,
      opacity: .35,
      transformOrigin: "center",
      yoyo: true
    });

    // Fence
    // gsap.to("#fence-1, #fence-2", 4, { x: -1500 });

    // Waves
    gsap.to("#wave-group", 20, { x: -2000 });
    gsap.to("#wave-group", 5, {
      scaleY: 0.5,
      yoyo: true,
      ease: "power1.inOut",
      transformOrigin: "top center"
    });

    // Rocks
    gsap.to("#rocks-1, #rocks-2", 60, { x: -1500 });

    // Clouds
    gsap.to("#clouds-1, #clouds-2", 100, { x: -2000 });

    // Islands
    gsap.to("#islands-1, #islands-2", 200, { x: -1500 });

    // Surfboards
    gsap.to("#surfboard-1", 20, { x: -2000, delay: 20, repeatDelay: 30 });
    gsap.to("#surfboard-2", 20, { x: -2000, repeatDelay: 30 });

    // Bird
    gsap.to("#bird", 12, { x: -2000 });
    gsap.to("#bird", 3, {
      y: 200,
      yoyo: true,
      ease: "power1.inOut",
      repeatDelay: 7
    });
    gsap.to("#front-wing, #back-wing", 1, {
      scaleY: -1.1,
      transformOrigin: "bottom center",
      yoyo: true
    });

  }
}
