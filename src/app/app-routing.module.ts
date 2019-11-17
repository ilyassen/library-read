import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChaptersComponent } from './chapters/chapters.component';

import { ReadMangaComponent } from './read-manga/read-manga.component';

import { AppComponent } from './app.component';
import { MangasComponent } from './mangas/mangas.component';


const routes: Routes = [
  { path: 'manga/:name/:chapter', component: ReadMangaComponent },
  { path: 'manga/:manga', component: ChaptersComponent },
  { path: 'mangas', component: MangasComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
