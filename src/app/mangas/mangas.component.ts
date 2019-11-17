import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';

import { MangaService } from '../service'

@Component({
  selector: 'app-mangas',
  templateUrl: './mangas.component.html',
  styleUrls: ['./mangas.component.css']
})
export class MangasComponent implements OnInit {
  title = 'my-dream-app';
  chapter = 1;
  mangas = {};
  imageArray = [];
  private manga;
  constructor(
    public mangaAPI: MangaService, 
    public router: Router
  ) {}

  ngOnInit() {
    this.loadChapters();
    this.loadMangas();
    this.mangaAPI.currentManga.subscribe(manga => this.manga = manga);
    }
  
    clickManga(url,id) {
      console.log(url + id,id);
      this.router.navigate([url + id]).then( (e) => {
        if (e) {
          console.log("Navigation is successful!");
          this.mangaAPI.changeManga(id);
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


