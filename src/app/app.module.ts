import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesCardComponent } from './services-card/services-card.component';
import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { TechnologySidebarComponent } from './technology-sidebar/technology-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesCardComponent,
    ExperienceCardComponent,
    TechnologySidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
