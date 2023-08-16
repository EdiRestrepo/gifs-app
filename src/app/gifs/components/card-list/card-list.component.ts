import { Component, Input } from '@angular/core';
import { Git } from '../../Interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent {

  @Input()
  public gifs: Git[] = [];

}
