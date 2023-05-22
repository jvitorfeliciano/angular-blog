import { Component } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';
import { News } from 'src/app/protocols/news';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  news: News[];
  mainNews: News[];
  otherNews: News[];

  constructor() {
    this.news = dataFake;
    this.mainNews = this.news.slice(0, 1);
    this.otherNews = this.news.slice(1);
  }
}
