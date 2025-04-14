import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { InterestsComponent } from './interests/interests.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Função para carregar os arquivos JSON
// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }

@NgModule({
  declarations: [
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    EducationComponent,
    InterestsComponent,
    ExperienceComponent,
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild() // IMPORTANTE!
  ],
  exports: [
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    EducationComponent,
    InterestsComponent,
    ExperienceComponent,
    PortfolioComponent,
    TranslateModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class ComponentsModule { }
