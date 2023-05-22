import { Component, Input } from '@angular/core';
import { News } from 'src/app/protocols/news';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent {
  @Input()
  news: News | undefined;
}
