import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { articles } from 'src/app/articles';
import { IArticle } from 'src/app/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public articles: IArticle[] = articles;

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

}
