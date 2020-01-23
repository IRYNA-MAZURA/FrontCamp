import { Component, Input, OnInit } from '@angular/core';

import { IArticle } from 'src/app/models';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() article: IArticle;
  @Input() i: number;
  @Input() maxNumber: number;
  
  constructor() { }

  ngOnInit() {
  } 

}
