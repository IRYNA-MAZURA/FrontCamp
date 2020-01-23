import { Component, OnInit } from '@angular/core';

import { articles } from 'src/app/articles';
import { IArticle } from 'src/app/models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private maxArticlesNumber = 4;
  public articles: IArticle[] = articles;
  
  constructor() { }

  ngOnInit() {
    
  }

  increaseMaxArticlesNumber = () => this.maxArticlesNumber += 4;

}
