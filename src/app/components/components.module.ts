import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    EducationComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    EducationComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class ComponentsModule { }
