import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesCardComponent } from './services-card/services-card.component';
import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { TechnologySidebarComponent } from './technology-sidebar/technology-sidebar.component';
import { TechnologyBackEndIconComponent } from './technology-back-end-icon/technology-back-end-icon.component';
import { TechnologyFrontEndIconComponent } from './technology-front-end-icon/technology-front-end-icon.component';
import { BoxCardsChooseTaglineComponent } from './box-cards-choose-tagline/box-cards-choose-tagline.component';
import { RatingStarCardsComponent } from './rating-star-cards/rating-star-cards.component';
import { AwardIconComponent } from './award-icon/award-icon.component';
import { BlogCardsComponent } from './blog-cards/blog-cards.component';
import { GlobalAddressComponent } from './global-address/global-address.component';
import { FooterInquerySectionComponent } from './footer-inquery-section/footer-inquery-section.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesCardComponent,
    ExperienceCardComponent,
    TechnologySidebarComponent,
    TechnologyBackEndIconComponent,
    TechnologyFrontEndIconComponent,
    BoxCardsChooseTaglineComponent,
    RatingStarCardsComponent,
    AwardIconComponent,
    BlogCardsComponent,
    GlobalAddressComponent,
    FooterInquerySectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
