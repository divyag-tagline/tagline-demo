import { Component, OnInit } from '@angular/core';
import { ServiceCard2 } from '../common';


@Component({
  selector: 'app-services-card',
  templateUrl: './services-card.component.html',
  styleUrls: ['./services-card.component.scss']
})
export class ServicesCardComponent implements OnInit {

  constructor() { }

  serviceCard2: ServiceCard2[] = [
    {
      img: '../assets/images/mobile.png',
      heading: 'Application Management and Modernisation',
      description: 'Here at Tagline, we provide the service of Application management and \
    modernisation for the growth of your business. We update the old \
    application with new approaches, including the latest languages, \
    frameworks, and platforms.',
      learMore: 'Learn More ->'
    }, {
      img: '../assets/images/web-design-icon.webp',
      heading: 'Software Product Engineering',
      description: 'We are dedicated to providing the best Software product engineering\
    services for your business. Our team of developers provides the service\
    of software product engineering and it includes designing, developing,\
    testing, and deploying the software products.',
      learMore: 'Learn More ->'
    }, {
      img: '../assets/images/testing-icon.webp',
      heading: 'Agile QA, Automation, and DevOps',
      description: 'At Tagline Infotech, we have a team of dedicated developers that provide\
    the services like Agile QA, Automation, and DevOps. Our DevOps engineers\
    constantly do the testing of software while Agile QA ensures the quality\
    of the software.',
      learMore: 'Learn More ->'
    }, {
      img: '../assets/images/uiux-design-icon.webp',
      heading: 'Digital Strategy & Design',
      description: 'Tagline Infotech helps clients to create a clear digital strategy and\
    design for the growth of their businesses. Our developers and UI UX\
    designers put the user first to create easy-to-navigate interfaces and\
    smooth end-to-end experiences.',
      learMore: 'Learn More ->'
    }];
  ngOnInit(): void {
  }

}
