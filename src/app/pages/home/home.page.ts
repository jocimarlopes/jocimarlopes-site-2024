import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import gsap from "gsap";
import { LanguageService } from '../../services/language.service';
import { AnimationsService } from 'src/app/services/animations.service';
import html2canvas from 'html2canvas';
import {jsPDF} from 'jspdf';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('cvContent', { static: false }) cvContent!: ElementRef;

  selectedLang = 'en';

  isDark: boolean = false
  screen: any = window.innerWidth
  ano: string = '2024'
  showTextDarkMode: boolean = false
  svgParamsDesktop: string = '100 100 1400.9 643.4'
  svgParamsMobile: string = '0 0 100vw 100vh'

  constructor(
    private languageService: LanguageService,
    private animations: AnimationsService
  ) {
    this.selectedLang = this.languageService.getCurrentLanguage();
  }

  ngOnInit() {
    this.addAnoCopyright()
    this.changeScreen()
    this.addBackground()
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.isDark = prefersDark.matches
    this.initializeDarkTheme(prefersDark.matches);
    prefersDark.addEventListener('change', (mediaQuery) => this.initializeDarkTheme(mediaQuery.matches));
  }

  addAnoCopyright() {
    const date = new Date()
    this.ano = date.getFullYear().toString()
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

  changeLanguage(lang: string) {
    this.languageService.setLanguage(lang);
    this.selectedLang = lang;
  }

  changeLanguageAnimations() {
    this.animations.animateChangeTextLanguage(
      this.selectedLang === 'pt' ? 'en' : 'pt', 
      this.changeLanguage.bind(this)
    )
    // this.changeLanguage(this.selectedLang === 'pt' ? 'en' : 'pt')
  }

  downloadCV() {
  const div = this.cvContent.nativeElement;
  div.classList.add('pdf-content');
  div.classList.add('force-desktop');
  html2canvas(div).then((canvas: HTMLCanvasElement) => {
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pageWidth - 20;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    const canvasDataURL = canvas.toDataURL('image/jpeg', 0.95);

    const pageHeightPx = (canvas.width / imgWidth) * pageHeight;
    let pageCount = Math.ceil(canvas.height / pageHeightPx);

    for (let i = 0; i < pageCount; i++) {
      // cria um novo canvas temporário com a fatia da página atual
      const pageCanvas = document.createElement("canvas");
      pageCanvas.width = canvas.width;
      pageCanvas.height = pageHeightPx;

      const ctx = pageCanvas.getContext("2d");
      if (ctx) {
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
        ctx.drawImage(
          canvas,
          0, i * pageHeightPx,
          canvas.width, pageHeightPx,
          0, 0,
          canvas.width, pageHeightPx
        );

        const pageDataURL = pageCanvas.toDataURL("image/jpeg", 0.95);
        if (i > 0) pdf.addPage();
        pdf.addImage(pageDataURL, 'JPEG', 10, 10, imgWidth, pageHeight - 20);
      }
    }

    pdf.save('example.pdf');
    div.classList.remove('pdf-content');
    div.classList.remove('force-desktop');
  });
}

  addBackground() {
    gsap.defaults({
      ease: "linear",
      repeat: -1
    });

    // Bola
    gsap.to("#ball-group", { x: -1700, repeatDelay: 10, duration: 30 });
    gsap.to("#ball", 30, {
      rotation: "-4000deg",
      transformOrigin: "center center",
      ease: "linear",
      repeatDelay: 10,
    });

    // Sol
    gsap.set("#sun-group", { x: 1150 });
    gsap.to("#sun-band-1, #sun-band-2", 5, {
      scale: 1.3,
      opacity: .35,
      transformOrigin: "center",
      yoyo: true
    });

    // Ondas
    gsap.to("#wave-group", 20, { x: -2000 });
    gsap.to("#wave-group", 5, {
      scaleY: 0.5,
      yoyo: true,
      ease: "power1.inOut",
      transformOrigin: "top center"
    });

    // Pedras
    gsap.to("#rocks-1, #rocks-2", 60, { x: -1500 });

    // Nuvens
    gsap.to("#clouds-1, #clouds-2", 100, { x: -2000 });

    // Ilhas
    gsap.to("#islands-1, #islands-2", 200, { x: -1500 });

    // Pranchas de Surf
    //gsap.to("#surfboard-1", 20, { x: -2000, delay: 20, repeatDelay: 30 });
    gsap.to("#surfboard-2", 20, { x: -2000, repeatDelay: 30 });

    // Pássaro
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

  async animateDarkModeButton() {
    this.toggleDarkTheme()
  }
}
