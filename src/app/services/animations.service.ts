import { Injectable } from '@angular/core';
import gsap from "gsap";

@Injectable({
  providedIn: 'root'
})
export class AnimationsService {

  constructor() { }

  animateChangeTextLanguage(lang: string, functionToRun: Function) {
    //title-card
    setTimeout(() => {
      gsap.fromTo(".title-card", { 
        opacity: 0,
      }, { 
        opacity: 0.3, 
        duration: 1,
        ease: 'power1.out',
        repeat: 0,
        onStart: () => {
          functionToRun(lang)
        }
      });
      gsap.fromTo(".text-animated", { 
        opacity: 0,
      }, { 
        opacity: 1, 
        duration: 1,
        ease: 'power1.out',
        repeat: 0,
        onStart: () => {
          functionToRun(lang)
        }
      });
    }, 100);
  }
}
