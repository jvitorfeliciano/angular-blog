import { Component, Input } from '@angular/core';
import { News } from 'src/app/protocols/news';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent {
  @Input()
  news: News | undefined;
}
