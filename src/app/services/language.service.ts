import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('app_language');
    const browserLang = translate.getBrowserLang();

    const defaultLang = savedLang || browserLang || 'en';
    this.setLanguage(defaultLang);
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('app_language', lang);
  }

  getCurrentLanguage() {
    return this.translate.currentLang;
  }

  getAvailableLanguages() {
    return ['en', 'pt'];
  }
}
