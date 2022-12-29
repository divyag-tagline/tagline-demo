import { Component, Input, OnInit } from '@angular/core';
import { OurBlogs } from '../common';

@Component({
  selector: 'app-blog-cards',
  templateUrl: './blog-cards.component.html',
  styleUrls: ['./blog-cards.component.scss']
})
export class BlogCardsComponent implements OnInit {
  @Input() ourBlogs : OurBlogs[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
