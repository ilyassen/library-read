import { Component, OnInit } from '@angular/core';
import { MangaService } from '../service';
import { DomSanitizer, SafeUrl , SafeHtml} from '@angular/platform-browser';

import { Router } from '@angular/router';

import { SafeResourceUrl} from "@angular/platform-browser";

import {Directive, HostBinding, Input} from '@angular/core';


@Component({
  selector: 'app-read-manga',
  templateUrl: './read-manga.component.html',
  styleUrls: ['./read-manga.component.css']
})
export class ReadMangaComponent implements OnInit {
  private manga;
  private chapter;
  private images;
  private url = "localhost:8000/api/manga/" + this.manga + "/";

  constructor(private mangaAPI: MangaService,private sanitizer: DomSanitizer,public router: Router) { }

  ngOnInit() {
    this.mangaAPI.currentManga.subscribe(manga => this.manga = manga);
    console.log("Manga :" + this.manga);
    this.mangaAPI.currentChapter.subscribe(chapter => this.chapter = chapter);
    console.log("Chapter :" + this.chapter);
    this.url = "/manga/" + this.manga + "/" + this.chapter;
    this.mangaAPI.getMangaImages(this.manga,this.chapter).subscribe((data:{}) => {
      this.images = data;
      this.images.chapters.forEach(element => {
        // element.name =  this.element.name;
      });
      console.log(this.images);
  });
}

getImgContent(imgFile): SafeUrl  {
  return this.sanitizer.bypassSecurityTrustUrl(imgFile);
}
getSafeUrl(imgFile) {
  return this.sanitizer.bypassSecurityTrustResourceUrl(imgFile);     
}

navigateToChapter(id:string) {

  this.router.navigate([this.url + id]).then( (e) => {
    if (e) {
      console.log("Navigation is successful!");
      this.mangaAPI.changeChapter(id);
      this.ngOnInit();
    } else {
      console.log("Navigation has failed!");
    }
  });
}

  onKeydown(e) {
    var ch = parseInt(this.chapter);
      e = e || window.event;

      if (e.keyCode == '38') {
          // up arrow
      }
      else if (e.keyCode == '40') {
          // down arrow
          // console.log("down");
          // window.scrollBy(0,100); 
      }
      else if (e.keyCode == '37') {
        
        ch--;
        this.navigateToChapter(ch.toString());

      }
      else if (e.keyCode == '39') {
        // right arrow
        ch++;
        this.navigateToChapter(ch.toString());
      }

  }
}
