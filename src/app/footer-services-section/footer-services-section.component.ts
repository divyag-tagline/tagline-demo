import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-services-section',
  templateUrl: './footer-services-section.component.html',
  styleUrls: ['./footer-services-section.component.scss']
})
export class FooterServicesSectionComponent implements OnInit {
  @Input() footerServices : string[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
