import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MangaService } from './service'

// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChaptersComponent } from './chapters/chapters.component';

import { RouterModule, Routes } from '@angular/router';
import { MangasComponent } from './mangas/mangas.component';
import { ReadMangaComponent } from './read-manga/read-manga.component';



@NgModule({
  declarations: [
    AppComponent,
    ChaptersComponent,
    MangasComponent,
    ReadMangaComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [MangaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
