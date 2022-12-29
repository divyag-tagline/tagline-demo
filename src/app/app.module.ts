import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesCardComponent } from './services-card/services-card.component';
import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { TechnologySidebarComponent } from './technology-sidebar/technology-sidebar.component';
import { TechnologyBackEndIconComponent } from './technology-back-end-icon/technology-back-end-icon.component';
import { TechnologyFrontEndIconComponent } from './technology-front-end-icon/technology-front-end-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesCardComponent,
    ExperienceCardComponent,
    TechnologySidebarComponent,
    TechnologyBackEndIconComponent,
    TechnologyFrontEndIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
