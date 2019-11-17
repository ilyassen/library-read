import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import {MangaService} from '../service';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit {
  private manga;
  private chapters;
  private url = "localhost:8000/api/manga/" + this.manga + "/";
  private chapter;
  constructor(
    private mangaAPI: MangaService,
    public router: Router) { }

  ngOnInit() {
    this.mangaAPI.currentManga.subscribe(manga => this.manga = manga);
    console.log(this.manga);
    this.url = "/manga/" + this.manga + "/";
    this.mangaAPI.getMangaChapters(this.manga).subscribe((data:{}) => {
      this.chapters = data;
      console.log(this.chapters);
    })
  }

  navigateToChapter(id:string) {
    console.log(this.url + id);
    this.router.navigate([this.url + id]).then( (e) => {
      if (e) {
        console.log("Navigation is successful!");
        this.mangaAPI.changeChapter(id);
      } else {
        console.log("Navigation has failed!");
      }
    });
  }

}
