import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    AboutComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class ComponentsModule { }
