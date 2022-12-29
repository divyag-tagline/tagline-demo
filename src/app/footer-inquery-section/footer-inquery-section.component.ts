import { Component, Input, OnInit } from '@angular/core';
import { FooterHrInquiry } from '../common';

@Component({
  selector: 'app-footer-inquery-section',
  templateUrl: './footer-inquery-section.component.html',
  styleUrls: ['./footer-inquery-section.component.scss']
})
export class FooterInquerySectionComponent implements OnInit {
  @Input() footerHrInquiry: FooterHrInquiry[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
