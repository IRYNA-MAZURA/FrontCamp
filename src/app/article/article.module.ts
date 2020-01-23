import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
      ArticleComponent
    ],
    exports: [
      ArticleComponent
    ],
    imports: [RouterModule, CommonModule]
  })
  
  export class ArticleModule { }