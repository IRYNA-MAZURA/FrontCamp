import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditModeComponent } from 'src/app/components/edit-mode/edit-mode.component';
import { SelectNewsModeComponent } from 'src/app/components/select-news-mode/select-news-mode.component';
import { MainComponent } from 'src/app/components/main/main.component';
import { NotFoundComponent } from 'src/app/components/not-found/not-found.component';

const routes: Routes = [
  { path: 'add', component: EditModeComponent },
  { path: 'edit', component: EditModeComponent },
  { path: 'more', component: SelectNewsModeComponent },
  { path: '', component: MainComponent, pathMatch: 'full'},
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
