import { Injectable } from '@angular/core'

import { HttpClient } from '@angular/common/http'

import { Observable, Subject } from 'rxjs';

import {BehaviorSubject} from 'rxjs'

import { map, switchMap } from 'rxjs/operators';

export interface Manga {
  name: string
}
export interface Chapters {
    name: string
  }

@Injectable()
export class MangaService {
  constructor(private http: HttpClient) {}
    private mangaSource = new BehaviorSubject<string>('Hardcore Leveling');
    private chapterSource = new BehaviorSubject<string>('1');

    currentManga = this.mangaSource.asObservable();
    currentChapter = this.chapterSource.asObservable();


  getMangas(): Observable<Manga[]> {
    return this.http.get<Manga[]>('http://localhost:8000/api/mangas')
  }

  getMangaChapters(name: string): Observable<Chapters[]> {
    return this.http.get<Chapters[]>('http://localhost:8000/api/manga/' + name)
  }

  getMangaImages(name: string, chapter: string): Observable<Chapters[]> {
    return this.http.get<Chapters[]>('http://localhost:8000/api/manga/' + name + '/' + chapter)
  }

  changeManga(message: string) {
      this.mangaSource.next(message);
  }

  changeChapter(message: string) {
    this.chapterSource.next(message);
}

}