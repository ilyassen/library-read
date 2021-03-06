import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MangaService } from './service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  chapter = 1;
  mangas = {};
  imageArray = [];
  constructor(
    public mangaAPI: MangaService, 
    public router: Router
  ) {}

  ngOnInit() {
    this.loadChapters();
    this.loadMangas();
    }
    clickManga(url,id) {
      console.log(url + id,id);
      this.router.navigate([url + id]).then( (e) => {
        if (e) {
          console.log("Navigation is successful!");
        } else {
          console.log("Navigation has failed!");
        }
      });
    }
    next() {
      this.chapter++;
      this.loadChapters();
      window.scroll(0,0);
    }

    previous() {
      this.chapter--;
      this.loadChapters();
      window.scroll(0,0);
    }

    // Get employees list
    loadMangas() {
      return this.mangaAPI.getMangas().subscribe((data:{}) => {
        this.mangas = data;
        console.log(this.mangas);
      })
    }

    loadChapters() {
      this.imageArray = [];
      for (let i = 1; i < 100 ; i++) {
        try{
          // this.imageArray.push(require('C:/Users/Admin/PycharmProjects/untitled/test/chapter-' + this.chapter + '/' + i + '.jpg'));
        }catch(error) {
          // console.error(error);
        }
      }
    }
}

